<template>
  <div>
    <page-header />
    <nuxt />
    <page-footer />
    <cookie-policy />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'
import CookiePolicy from '~/components/CookiePolicy'

export default {
  components: {
    PageHeader,
    PageFooter,
    CookiePolicy
  }
}
</script>

<style lang="sass">
@import '~assets/scss/variables';
  
@import "~bootstrap/scss/bootstrap.scss"
@import '~mapbox-gl/dist/mapbox-gl';
@import '~assets/scss/module';

@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Noto+Serif:400,400i');
</style>
