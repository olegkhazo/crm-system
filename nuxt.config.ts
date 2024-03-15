// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image", 
    "@nuxtjs/tailwindcss", 
    "shadcn-nuxt", 
    [
      "@nuxtjs/google-fonts", 
        {
        families: {
          Lato: {
            wght: [100, 300, 400, 700],
            ital: [100]
          },
        },
      },
    ],
  ],

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})