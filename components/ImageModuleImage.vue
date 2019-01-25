<template>
  <div class="image-grid__image" v-bind:style="ratioStyle">
    <aspect-image v-bind:src="src" v-bind:ratioWidth="ratioWidth" v-bind:ratioHeight="ratioHeight" v-bind:title="title" />
  </div>
</template>

<script>
import AspectImage from './AspectImage.vue';

export default {
    name: 'ImageModuleImage',

    components: {
        AspectImage
    },
    
    props: {
        src: {
            type: [String, Object],
            required: true
        },
        title: {
            type: String,
            required: false,
            default: ""
        },
        ratioWidth: {
            type: Number,
            required: true
        },
        ratioHeight: {
            type: Number,
            required: true
        }
    },

    computed: {
        ratioStyle () {
            var ratio = (this.ratioWidth / this.ratioHeight)
            return {
                'flex': ratio + ' 0%'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
