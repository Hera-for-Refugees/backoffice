const withCSS = require('@zeit/next-css')

const config = {
  // env: {
  //   API_URL: process.env.NEXT_EXPORT
  //     ? 'https://example.com'
  //     : 'http://localhost:1337'
  // }
}

module.exports = withCSS(config)
