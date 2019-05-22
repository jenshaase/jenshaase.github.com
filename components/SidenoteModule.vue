<template>
  <div class="module sidenote-module container--text">
    <div class="content">
      <h3>{{ title }}</h3>    
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidenoteModule',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/_functions.scss';
@import '~bootstrap/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

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

.sidenote-module {
  h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;

    @include media-breakpoint-up(sm) {
      font-size: 1.3rem;
    }
    @include media-breakpoint-up(md) {
      font-size: 1.5rem;
    }
    @include media-breakpoint-up(lg) {
      font-size: 2rem;
    }
  }

  .content {
    border: 1px solid #989da0;
    background-color: #eeeeee;
    font-size: 1rem;
    padding: 10px 20px;

    @include media-breakpoint-up(sm) {
      padding: 20px 30px;
    }
    @include media-breakpoint-up(md) {
      padding: 30px 40px;
    }
    @include media-breakpoint-up(lg) {
      padding: 40px 50px;
    }
  }
}
</style>
