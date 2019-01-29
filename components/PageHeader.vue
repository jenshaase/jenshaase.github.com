<template>
  <div class="navigation">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <router-link to="/" class="navbar-brand d-md-none">
          <svg class="navbar__logo" aria-hidden="true">
            <use xlink:href="#logo" />
          </svg>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="onToggleNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="navbar-collapse" :class="{ 'collapse': collapsed }">
          <ul class="nav navbar-nav flex-fill w-100 flex-nowrap">
            <li class="nav-item active">
              <a class="nav-link" href="/tales">
                Tales
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/gear">
                Gear
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav flex-fill justify-content-center d-none d-md-flex">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <svg class="navbar__logo" aria-hidden="true">
                  <use xlink:href="#logo" />
                </svg>
              </router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav flex-fill w-100 justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="http://instagram.com/jenshaase" title="Follow me on Instagram">
                <svg class="navbar__social" aria-hidden="true">
                  <use xlink:href="#instagram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import logo from './../assets/svg/logo.svg'
import instagram from './../assets/svg/instagram.svg'

export default {
  name: 'PageHeader',
  data() {
    return {
      logo: logo,
      instagram: instagram,
      collapsed: true
    }
  },
  methods: {
    onToggleNavbar() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
/*@import "~assets/scss/variables";
@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/mixins";*/

.navigation {
  border-bottom: 1px solid #e5e5e5;

  .navbar {
    .navbar__logo {
      width: 120px;
      height: 120px;
    }

    .navbar__social {
      width: 25px;
      height: 25px;
      vertical-align: bottom;
    }

    .flex-fill {
      flex: 1;
    }

    .navbar-brand {
      .navbar__logo {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
