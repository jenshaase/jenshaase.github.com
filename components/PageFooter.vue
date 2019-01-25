<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 left-column">
          &copy; Jens Haase
        </div>
        <div class="col-md-6 right-column">
          <a href="/datenschutz">Data protection</a> |
          <a href="/impressum">Legal Disclosure</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
    name: 'PageFooter',
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins";

footer {
    border-top: 1px solid #e4e4e4;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 1rem;

    .right-column {
        text-align: right;
    }

  a {
    color: $navbar-light-color;

    @include hover-focus {
      color: $navbar-light-hover-color;
    }

    &.disabled {
      color: $navbar-light-disabled-color;
    }
  }
}
</style>
