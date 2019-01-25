<template>
  <div class="story">
    <a :href="link" class="story__link">
      <aspect-image :src="image" :ratioWidth="16" :ratioHeight="9" :enlarge="false" :zoomOnHover="true" />
      <h3 class="story__headline">{{ headline }}</h3>
      <div class="story__teaser">{{ teaser }}</div>
      <div class="story__read-more">Read more</div>
    </a>
  </div>
</template>

<script>
import AspectImage from "~/components/AspectImage.vue";

export default {
  name: "Story",
  components: {
    AspectImage
  },
  props: {
    headline: {
      type: String,
      required: true
    },
    teaser: {
      type: String,
      required: true
    },
    image: {
      type: [String, Object],
      required: true
    },
    link: {
      type: String,
      required: true
    }
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
      margin-top: .2em;
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
