var path = require('path')
console.log(__dirname)
module.exports = {
  configureWebpack: config => {
    config.resolve.alias = {
      ['@components']: path.resolve(__dirname, 'src/components/'),
      ['@view']: path.resolve(__dirname, 'src/view/')
    }
  },
  chainWebpack: config => {
    console.log(config)
  }
}
