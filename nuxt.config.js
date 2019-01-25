var path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {

    vendor: ['axios', 'mapbox-gl'],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      
      config.module.noParse = /(mapbox-gl)\.js$/

      // get and remove file loader
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
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
          sizes: [300, 600, 1200, 2000],
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
    { src: '~plugins/ga.js', ssr: false }
  ]
}
