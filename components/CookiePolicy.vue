<template>
  <div v-if="display" class="cookie-policy">
    <div class="container">
      <div class="cookie-policy__content">
        <p>In using cookies, we are aiming to continually improve our websites and make them more user-friendly. In continuing to use the websites, you consent to the use of cookies.</p>
        <p>
          Further information can be found in the <a href="/datenschutz">
            data protection section
          </a>
        </p>

        <a class="cookie-policy__link" href="#" @click="onCloseLayer">
          <svg class="cookie-policy__link-icon" aria-hidden="true">
            <use xlink:href="#cancel" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import symbol from './../assets/svg/cancel.svg'

export default {
  name: 'CookiePolicy',

  data() {
    return {
      symbol: symbol,
      display: false
    }
  },

  mounted() {
    if (document.cookie.indexOf('cookiepolicy=1') !== -1) {
      this.display = false
    } else {
      this.display = true
    }
  },

  methods: {
    onCloseLayer(event) {
      event.preventDefault()
      document.cookie = 'cookiepolicy=1;path=/'
      this.display = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-policy {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f8f8f8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  z-index: 200;

  .cookie-policy__content {
    font-size: 1rem;
    padding: 20px;

    .cookie-policy__link {
      position: absolute;
      top: 20px;
      right: 20px;

      .cookie-policy__link-icon {
        fill: currentColor;
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
