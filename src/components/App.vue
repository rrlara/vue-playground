<template>
  <div id="wrapper" class="container">
    <!-- header -->
    <div id="header">
      <a id="yc" href="#">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <h1><a href="#">Servir Admin</a></h1>
      <h1>/ <a href="#/list">List</a></h1>
      <h1>/ <a href="#/map">Map</a></h1>
      <span class="source">
        Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
        <!-- <a href="https://github.com/yyx990803/vue-hackernews" target="_blank">Source</a> -->
      </span>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">
@import "../variables.styl"

html, body
  font-family Verdana
  font-size 13px
  height 100%

ul
  list-style-type none
  padding 0
  margin 0

a
  color #000
  cursor pointer
  text-decoration none
  
#wrapper
  background-color $bg
  position relative
  margin 0 auto
  height 100%

#header
  background-color #f60
  height 24px
  position relative
  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0
  .source
    color #fff
    font-size 11px
    position absolute
    top 4px
    right 4px
    a
      color #fff
      &:hover
        text-decoration underline

#yc
  border 1px solid #fff
  margin 2px
  display inline-block
  vertical-align middle
  img
    vertical-align middle

.view
  background-color $bg
  transition opacity .2s ease
  box-sizing border-box
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #wrapper
    width 100%
</style>
