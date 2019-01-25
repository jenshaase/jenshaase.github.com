<template>
  <div class="module text-module container--text">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'TextModule',
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins";
  
.container--text {
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  );

  $container-max-widths: (
    sm: 75%,
    md: 650px,
    lg: 650px,
    xl: 650px
  );
    
  @include make-container();
  @include make-container-max-widths($container-max-widths, $grid-breakpoints);
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
}

.text-module {

    font-size: 1.2rem;

    blockquote {
        border-left: 1px solid $body-color;
        font-style: italic;
        margin: 4% 0;
        padding-left: 3%;
        font-size: 1.4rem;
    }
}
</style>
