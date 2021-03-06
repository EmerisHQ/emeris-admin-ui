export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    API_URL: process.env.API_URL,
    CNS_URL: process.env.CNS_URL,
    BASE_URL: process.env.BASE_URL
  },

  generate: {
    exclude: [
      /^\/chain/ // path starts with /chain
    ]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emeris-admin-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/admin/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Nunito',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/after-each.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { materialDesignIcons: false }],
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      google: {
        clientId: '456830583626-ovlsdesepg4t2g1ufk2nse0b1tbm31pc.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: process.env.CNS_URL? process.env.CNS_URL + '/auth/login': 'http://127.0.0.1:8000/v1/cns/auth/login',
          userInfo: process.env.CNS_URL? process.env.CNS_URL + '/auth/user': 'http://127.0.0.1:8000/v1/cns/auth/user'
        },
        redirect: {
          login: '/login',
          logout: '/login',
          home: '/',
        },
        watchLoggedIn: true,

      },
    }
  },

  axios: {
    baseUrl: process.env.CNS_URL || "/v1/cns",
    apiUrl: process.env.API_URL || "/v1"
  },

  router: {
    base: process.env.BASE_URL || "/admin",
    middleware: 'auth'
  }
};
