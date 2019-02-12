const path = require('path')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Tales of the road - Bikepacking adventures by Jens Haase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi, my name is Jens Haase and this is my personal blog about bikepacking and bike touring. Here, I will write down about the adventures I made along my way.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    // vendor: ['mapbox-gl'],

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      config.module.noParse = /(mapbox-gl)\.js$/

      // get and remove file loader
      const rule = config.module.rules.find(
        r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i'
      )
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      // add it again, but now without 'assets\/svg'
      config.module.rules.push({
        test: /\.(gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: false,
          runtimeCompat: true,
          esModule: false
        }
      })

      config.module.rules.push({
        test: /\.(gpx)$/,
        loader: path.resolve('build/gpx-loader'),
        options: {
          name: 'gpx/[name].[hash:7].json'
        }
      })

      config.module.rules.push({
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          sizes: [300, 600, 1200],
          placeholder: true,
          placeholderSize: 50,
          name: 'img/[name]-[width]-[hash:7].[ext]',
          adapter: require('responsive-loader/sharp')
        }
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~/plugins/photoswipe', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/lazysizes.js', ssr: false }
  ],

  sitemap: {
    generate: true,
    gzip: false,
    hostname: 'https://jenshaase.com',
    filter ({ routes }) {
      return routes.map(route => route.url = `${route.url}/`)
    }
  },
}
