var app_id = "t8WGKp59jCJ048owVTG8Ui5l86hc8yrHxQVm3mVS";
var js_key = "629XQDdUUc1q1A33BA7T1MoZTVj3DBq6ALjnqAId";
Parse.initialize(app_id, js_key);

import { EventEmitter } from 'events'

const store = new EventEmitter()

export default store


/**
 * Data to fectch 
 */

store.fetchDataFromParse = function(){
	var promise = new Parse.Promise()

            // Error function
            var error = function() {
                console.error('Error:', arguments)
                // Break it
                response.error('Query failed, check logs')
            }

            var query = new Parse.Query('devSurveySubmissions')
            query.equalTo("approved", true);
            var objects = []
            var totalObjects

            // Get the total of objects
            query.count({
                success: function(count) { totalObjects = count }
                , error: error
            }).then(function() {
                var skip = 0

                var populate = function(_objects) {
                    objects = objects.concat(_objects)

                    // Set the new skip
                    skip += 1000

                    // If skip passed the maximum skip limit:
                    // * Reset skip
                    // * Query on the last of the old object
                    if (skip > 10000) {
                        skip = 0
                        var createdAt = _objects[_objects.length - 1].createdAt
                        query.greaterThanOrEqualTo('createdAt', createdAt)
                    }

                    // Loop when we don't have all the objects
                    if (objects.length < totalObjects) {
                        loop()
                        // Reslve the promise with all the objects when we have them
                    } else {
                    	var realData = GeoJSON.parse(objects, {Point: ['lat', 'lng'],
					        extra: {
					            'marker-size': "small",
					            'marker-color':"#3bb2d0",
					            'active': false,
					            'visible': true
					        }
					    });
                        promise.resolve(realData);
                        // console.log("getAllApprovedParseData: ", objects);
                    }
                }

                var loop = function() {
                    query.ascending('createdAt').limit(1000).skip(skip)
                    query.find({
                        success: populate
                        , error: error
                    })
                }
                loop()
            })

            return promise;
}

