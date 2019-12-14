const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "@/styles/variables.less";`
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
