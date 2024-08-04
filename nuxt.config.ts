// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
      server: {
          hmr: {
              host: 'localhost',
          },
          watch: {
              usePolling: true
          }
      },
  },
  experimental: {
      asyncContext: true
  },
  runtimeConfig: {
    public: {
        apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:8000/api',
        //frontendUrl: "http://localhost:3000",
        defaultHeaders: {
            'Content-Type': 'application/json',
        },
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
