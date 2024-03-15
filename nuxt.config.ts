// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/google-fonts"],

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})