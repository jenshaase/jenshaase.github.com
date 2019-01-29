<template>
  <figure class="image-aspect-ratio" :class="{ 'image-aspect-ratio--zoom-on-hover': zoomOnHover }" :style="ratioPadding" itemscope itemtype="http://schema.org/ImageObject">
    <img
      v-if="isImageUrl" 
      class="preview-img-item lazyload"
      :data-src="src" 
      itemprop="thumbnail"
      :alt="title" 
      v-on="enlarge ? { click: () => $photoswipe.open(photoswipeGroup, photoswipeIndex) } : {}"
    >
    <img
      v-else 
      class="preview-img-item lazyload"
      :src="src.placeholder" 
      :data-srcSet="srcSet" 
      :data-sizes="sizes"
      itemprop="thumbnail"
      :alt="title" 
      v-on="enlarge ? { click: () => $photoswipe.open(photoswipeGroup, photoswipeIndex) } : {}"
    >

    <figcaption v-if="title" itemprop="caption description">
      {{ title }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'AspectImage',
  props: {
    src: {
      type: [String, Object],
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    ratioWidth: {
      type: Number,
      required: true
    },
    ratioHeight: {
      type: Number,
      required: true
    },
    enlarge: {
      type: Boolean,
      required: false,
      default: true
    },
    zoomOnHover: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      photoswipeIndex: -1,
      sizes: '(min-width: 768px) 50vw, 100vw'
    }
  },

  computed: {
    isImageUrl() {
      return typeof this.src === 'string'
    },

    photoswipeGroup() {
      return this.$nuxt.$route.path
    },

    photoswipeImageData() {
      if (this.isImageUrl) {
        return {
          src: this.src,
          w: 5184,
          h: 3456,
          title: this.title
        }
      } else {
        // expect last image to be the biggest.
        const lastImage = this.src.images[this.src.images.length - 1]
        return {
          src: lastImage.path,
          w: lastImage.width,
          h: lastImage.height,
          title: this.title
        }
      }
    },

    srcSet() {
      return this.src.srcSet
    },

    ratioPadding() {
      const ratio = (this.ratioHeight / this.ratioWidth) * 100
      return {
        'padding-top': ratio + '%'
      }
    }
  },

  mounted() {
    this.photoswipeIndex = this.$photoswipe.register(
      this.photoswipeGroup,
      this.photoswipeImageData
    )
  }
}
</script>

<style lang="scss" scoped>
.image-aspect-ratio {
  position: relative;
  padding-top: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;

  > img {
    position: absolute;
    width: 100%;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: 0.7s ease-in-out;
    left: 0;
    right: 0;
    margin: 0 auto;

    &.preview-img-item {
      cursor: pointer;
    }
  }

  @mixin image-aspect($width, $height) {
    padding-top: ($height / $width) * 100%;

    &.image-aspect-ratio__portrait {
      padding-top: ($width / $height) * 100%;
    }
  }

  &.image-aspect-ratio__16-9 {
    @include image-aspect(16, 9);
  }

  &.image-aspect-ratio__3-2 {
    @include image-aspect(3, 2);
  }

  &.image-aspect-ratio__4-3 {
    @include image-aspect(4, 3);
  }

  &.image-aspect-ratio__1-1 {
    @include image-aspect(1, 1);
  }

  figcaption {
    display: none;
  }

  &.image-aspect-ratio--zoom-on-hover {
    > img {
      &:hover {
        -ms-transform: translateY(-50%) scale(1.2);
        -webkit-transform: translateY(-50%) scale(1.2);
        -moz-transform: translateY(-50%) scale(1.2);
        -o-transform: translateY(-50%) scale(1.2);
        transform: translateY(-50%) scale(1.2);
      }
    }
  }
}
</style>
