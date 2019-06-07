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
      '~/plugins/axios' // dotenv
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
      
    }
  },

  env: {
      API_URL: process.env.API_URL
  }
}
