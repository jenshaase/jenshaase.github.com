<template>
  <div class="page">
    <article-header
      :title="title"
      :subtitle="subtitle"
    />

    <full-image-module src="https://via.placeholder.com/500" :ratio-width="16" :ratio-height="9" />

    <text-module>
      <p>{{ description }}</p>
    </text-module>

    <article-header title="Features" subtitle="My custom frame bag feature list" type="h2" />

    <div class="container feature-list">
      <div class="row">
        <div class="col-md-4">
          <div class="feature">
            <h3>Bolt-On Design</h3>
            <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
            <div class="feature__content">
              <p>The frame bag will be attached to the water bottle bolts. A plastic stiffer ensures that the bag stays in place.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Inner pocket</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>An inner pocket allows you to story small item inside the bag</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Hang loops</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>Hang loops can be used to wrap tent poles below the top tube of your bike</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Hydration port</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Two compartments</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Lace-up attachment</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>Drainport</h3>
          <aspect-image src="https://via.placeholder.com/300"  :ratio-width="16" :ratio-height="9" />
          <div class="feature__content">
            <p>TODO</p>
          </div>
        </div>
      </div>
    </div>

    <article-header title="Tools" subtitle="Required tool to make this frame bag" type="h2" />

    <article-header title="Material" subtitle="Required material to make this frame bag" type="h2" />

    <article-header title="Make a template" subtitle="TODO" type="h2" />

    <text-module>
      <a href="https://vimeo.com/36255331">How to make a template video</a>
    </text-module>

    <article-header title="Train" subtitle="Build some prototypes" type="h2" />
  </div>
</template>

<script>
import ArticleHeader from '~/components/ArticleHeader.vue'
import TextModule from '~/components/TextModule.vue'
import FullImageModule from '~/components/FullImageModule.vue'
import AspectImage from '~/components/AspectImage.vue'
/* import ImageModule from '~/components/ImageModule.vue'
import ImageModuleRow from '~/components/ImageModuleRow.vue'
import ImageModuleImage from '~/components/ImageModuleImage.vue'

import MapModule from '~/components/MapModule.vue' */

export default {
  components: {
    ArticleHeader,
    FullImageModule,
    TextModule,
    AspectImage
    /* ImageModule,
    ImageModuleRow,
    ImageModuleImage,

    MapModule */
  },

  data() {
    return {
      title: 'DIY Bolt-On Frame Bag',
      subtitle: 'Complete guide on how to build your own bikepacking frame bag',
      description: 'TODO: Add description'
    }
  },

  head() {
    return {
      title: this.title + ' - ' + this.subtitle,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-list {
  margin-top: 2em;
}
</style>
