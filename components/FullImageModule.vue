<template>
  <div class="container module full-image-module">
    <aspect-image v-bind:src="src" v-bind:ratioWidth="ratioWidth" v-bind:ratioHeight="ratioHeight" v-bind:title="title" />
  </div>
</template>

<script>
import AspectImage from './AspectImage.vue';

export default {
    name: 'ImageModule',
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
    }
}
</script>

<style lang="scss" scoped>
</style>
