<template>
  <div class="page">
    <article-header
       title="Gear"
       subtitle="It's not about the gear, it's about the idea">
    </article-header>

    <text-module>
      <p>Sorry, no content here at the moment...</p>
    </text-module>

    <div class="module container">
      <div class="row">
        <!--<div class="col-md-5">
          <story link="/tales/wild-atlantic-way" image="https://via.placeholder.com/500" headline="Wild Atlantic Way" teaser="Two weeks of cycling along the Irish coastline" />
        </div>
        <div class="col-md-5 offset-md-2">
          <story link="/tales/wild-atlantic-way" image="https://via.placeholder.com/500" headline="Wild Atlantic Way" teaser="Two weeks of cycling along the Irish coastline" />
        </div>
        <div class="w-100"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ImageModule from "~/components/ImageModule.vue";
import ImageModuleRow from "~/components/ImageModuleRow.vue";
import ImageModuleImage from "~/components/ImageModuleImage.vue";
import AspectImage from "~/components/AspectImage.vue";
import FullImageModule from "~/components/FullImageModule.vue";
import MapModule from "~/components/MapModule.vue";
import PageHeader from "~/components/PageHeader.vue";
import ArticleHeader from "~/components/ArticleHeader.vue";
import TextModule from "~/components/TextModule.vue";
import Story from "~/components/Story.vue";

export default {
  components: {
    ImageModule,
    ImageModuleRow,
    ImageModuleImage,
    AspectImage,
    FullImageModule,
    MapModule,
    PageHeader,
    ArticleHeader,
    TextModule,
    Story
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins";

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
