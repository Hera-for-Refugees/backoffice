// dont remove!!
// required for webstorm
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}
