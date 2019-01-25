<template>
  <div class="image-grid__row">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'ImageModuleRow',
}
</script>

<style lang="scss" scoped>
.image-grid__row {
    display: flex;
    flex-flow: row wrap;
    margin: .5em -1em .5em -1.5em;

    @media (min-width: 40em) {
        margin: .5em 0 .5em -.5em;
        // setting the left margin at -.5em and the right at 0 offsets the grid to account for the gutters
    }

    @mixin image-grid__image-aspect($width, $height) {
        flex: ($width / $height) 0%;

        &.image-grid__image--portrait {
            flex: ($height / $width) 0%;
        }
    }

    
    .image-grid__image {
        flex: 0 auto;
        margin: 0 auto;
        padding: .5em 0 0 .5em;
        width: 100%;

        img {
            width: 100%;
        }

        @media (min-width: 40em) {
            flex: 0;

            &.image-grid__image--1-1 {
                @include image-grid__image-aspect(1, 1)
            }

            &.image-grid__image--3-2 {
                @include image-grid__image-aspect(3, 2)
            }

            &.image-grid__image--4-3 {
                @include image-grid__image-aspect(4, 3)
            }

            &.image-grid__image--16-9 {
                @include image-grid__image-aspect(16, 9)
            }
        }
    }
}

.image-grid__row + .image-grid__row {
    margin-top: -.5em;
}
</style>
