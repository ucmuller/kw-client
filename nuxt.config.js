const pkg = require('./package')

require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
    css: [
        { src: '~/assets/sass/common.scss', lang: 'scss' },
    ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/axios' ,// dotenv
      { src: '~/plugins/vue2-google-maps.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      // Doc: https://github.com/nuxt-community/axios-module#usage
      '@nuxtjs/axios',
      '@nuxtjs/proxy',
      // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
      '@nuxtjs/bulma',
      '@nuxtjs/dotenv', // dotenv
      ['nuxt-sass-resources-loader', [
          '~/assets/sass/_variable.scss',
      ]],
  ],
  /*
  ** Axios module configuration
  */
    axios: {
        proxy: true
    },
    proxy: {
        '/api': 'http://app.kidsweekend.test:8888'
    },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
      config.externals = config.externals || [];
      if (!ctx.isClient) {
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }
    }
  },

  env: {
      API_URL: process.env.API_URL
  },
  vendor: ['vue2-google-maps']

}
