<template>
  <div class="page">
    <article-header
      title="Tales"
      subtitle="Focus on the journey not the destination"
    />

    <div class="module container">
      <div class="row">
        <div class="col-md-5">
          <story link="/tales/a-cross-the-3-2019" :image="require('./a-cross-the-3-2019/img/bikepacking-jens-haase.jpg')" headline="A Cross the 3" teaser="My first bikepacking adventure" />
        </div>

        <div class="col-md-5 offset-md-2">
          <story link="/tales/wild-atlantic-way" :image="require('./wild-atlantic-way/img/valentia-island-2.jpg')" headline="Wild Atlantic Way" teaser="Two weeks of cycling along the Irish coastline" />
        </div>

        <div class="w-100"></div>
        <!--<div class="col-md-5 offset-md-2">
          <story link="/tales/wild-atlantic-way" image="https://via.placeholder.com/500" headline="Wild Atlantic Way" teaser="Two weeks of cycling along the Irish coastline" />
        </div>
        <div class="w-100"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from '~/components/ArticleHeader.vue'
import Story from '~/components/Story.vue'

export default {
  components: {
    ArticleHeader,
    Story
  },

  head() {
    return {
      title: 'Tales - Bikepacking adventures by Jens Haase'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.story {
  margin-bottom: 2em;

  .story__link {
    text-decoration: none;

    .story__headline {
      color: $body-color;
    }

    .story__teaser {
      color: $text-gray;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .story__read-more {
      color: $orange;

      &:after {
        content: '\2192';
        margin-left: 10px;
        display: inline-block;
      }
    }

    &:hover {
      .story__read-more {
        text-decoration: underline;

        &:after {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
