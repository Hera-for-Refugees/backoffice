const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "@/styles/config/variables.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
}
