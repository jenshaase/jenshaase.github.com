<template>
  <div class="module container--image image-grid">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'ImageModule',
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins";

.container--image {
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  );

  $container-max-widths: (
    sm: 540px,
    md: 840px,
    lg: 840px,
    xl: 840px
  );
    
  @include make-container();
  @include make-container-max-widths($container-max-widths, $grid-breakpoints);

  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
}
</style>
