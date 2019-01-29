<template>
  <div class="page">
    <article-header :title="title" :subtitle="subtitle" />
    <full-image-module :src="require('./img/me.jpg')" :ratio-width="16" :ratio-height="9" title="Sonnenuntergang in Castletownbere" />

    <text-module>
      <p>
        Hi, my name is <em>Jens Haase</em> and this is my <em>personal blog about bikepacking and bike touring</em>. 
        Here, I will write down about the adventures I made along my way.
      </p>

      <p>
        If you ever read any other bike touring blog, you probably read about how many countries they visited or how many kilometers they made.
        I definitely can not compete with their
        numbers and probably never will. I started bike touring when I noticed that I was not able to discover more new roads 
        and trails near my home. Seeing new roads and experiencing their surrounding
        landscapes, was always my favorite thing in cycling. Therefore, finding new roads and experiences
        doesn't mean you have to quit your job, go to other countries and start a life a cycling nomad. Often
        you can find new roads by taking the train for a few hours and get a whole new experience.
      </p>

      <p>
        On this website, I will cover some of these experiences. I will tell my tales about my cycling trips, show images 
        I took during my rides and talk a little bit about the gear I used.
      </p>

      <p>
        So, go ahead a read some <a href="/tales">
          tales
        </a> or check out my <a href="/gear">
          gear
        </a>!
      </p>
    </text-module>

    <div class="container module">
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <story link="/tales" headline="Tales" teaser="Focus on the journey not the destination" :image="require('./img/tales.jpg')" />
        </div>
        <div class="col-md-5">
          <story link="/gear" headline="Gear" teaser="It's not about the gear, it's about the idea" :image="require('./img/gear.jpg')" />
        </div>
      </div>
    </div>

    <text-module>
      <p>
        If you are interested in more recent updates on my bike adventures, 
        feel free to follow me on <a href="http://instagram.com/jenshaase">
          Instagram
        </a> 
        and leave me a message there!
      </p>
    </text-module>
  </div>
</template>

<script>
import FullImageModule from '~/components/FullImageModule.vue'
import ArticleHeader from '~/components/ArticleHeader.vue'
import TextModule from '~/components/TextModule.vue'
import Story from '~/components/Story.vue'

export default {
  components: {
    FullImageModule,
    ArticleHeader,
    TextModule,
    Story
  },

  data() {
    return {
      title: 'Tales of the road',
      subtitle: 'Bikepacking adventures by Jens Haase',
      description:
        'Hi, my name is Jens Haase and this is my personal blog about bikepacking and bike touring. Here, I will write down about the adventures I made along my way.'
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
@import '~assets/scss/variables';
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.page {
  .story {
    @include media-breakpoint-up(md) {
      margin-bottom: 0;
    }
  }
}
</style>
