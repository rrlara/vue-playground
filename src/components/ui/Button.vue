<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['type', 'position'],
        computed: {
            buttonClass() {
                var type = this.type;
                return {
                    'button': true,
                    'button-disabled': type == 'disabled',
                    'button-action': type == 'action',
                    'button-general': type == 'general',
                    'button-warning': type == 'warning',
                    'button-left': this.position == 'left',
                }
            }
        }
    };
</script>


<style lang="stylus">
@import "../../variables.styl"

.button {
    height: 36px;
    line-height: 32px;
    background: none;
    padding: 0 1rem;
    overflow: visible;
    border-radius: 5px;
    margin-left: 1rem;
    letter-spacing: 1px;
    @include font-size(13);
    color: $color-disabled;
    text-transform: uppercase;
    border: 2px solid $color-border;
    font-weight: $font-weight-semibold;
    @include transition (all 0.12s linear);
    float: right;
    &:last-child {
        margin-left: 0;
    }
}

.button-left {
    float: left;
    &:first-child {
        margin-left: 0;
    }
}

.button-action {
    border-color: $color-cta-solid;
    color: $color-cta-text;
    &:hover {
        background: $color-cta-solid;
        color: $color-white;
    }
}

.button-general {
    border-color: $color-ok-solid;
    color: $color-ok-text;
    &:hover {
        background: $color-ok-solid;
        color: $color-white;
    }
}

.button-warning {
    border-color: $color-warning-solid;
    color: $color-warning-text;
    &:hover {
        background: $color-warning-solid;
        color: $color-white;
    }
}

.button.disabled {
    cursor: not-allowed;
}
</style>
