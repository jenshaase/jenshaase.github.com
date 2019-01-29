<template>
  <div class="article-header">
    <div class="article-header__titles">
      <div class="container">
        <h1 v-if="type == 'h1'" class="article-header__main-title">
          {{ title }}
        </h1>
        <h2 v-if="type == 'h2'" class="article-header__main-title">
          {{ title }}
        </h2>
      </div>
      <div v-if="subtitle" class="container--article-sub-title">
        <h2 class="article-header__sub-title">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.article-header {
  .container--article-sub-title {
    $grid-breakpoints: (
      xs: 0,
      sm: 576px,
      md: 768px,
      lg: 992px,
      xl: 1200px
    );

    $container-max-widths: (
      sm: 75%,
      md: 540px,
      lg: 540px,
      xl: 540px
    );

    @include make-container();
    @include make-container-max-widths(
      $container-max-widths,
      $grid-breakpoints
    );
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }

  .article-header__titles {
    text-align: center;
    position: relative;
    padding-top: 15px;
    margin-top: 60px;

    .article-header__main-title {
      font-family: $headings-font-family;
      font-weight: $headings-font-weight;
      margin-bottom: 20px;

      &:after {
        content: ' ';
        position: absolute;
        top: 0%;
        left: 50%;
        width: 100px;
        border: 1px solid #e36e39;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        transform: translateX(-50%);
      }
    }

    h1.article-header__main-title {
      font-size: 2rem;
      @include media-breakpoint-up(sm) {
        font-size: 3rem;
      }
      @include media-breakpoint-up(md) {
        font-size: 4rem;
      }
      @include media-breakpoint-up(lg) {
        font-size: 4rem;
      }
    }

    h2.article-header__main-title {
      font-size: 1.5rem;
      @include media-breakpoint-up(sm) {
        font-size: 2rem;
      }
      @include media-breakpoint-up(md) {
        font-size: 3rem;
      }
      @include media-breakpoint-up(lg) {
        font-size: 3rem;
      }
    }

    .article-header__sub-title {
      font-size: 1.25rem;
      font-family: $font-family-sans-serif;
      color: #989da0;
      font-weight: 400;
    }
  }
}
</style>
