module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/app.scss"'
      }
    }
  }
}
