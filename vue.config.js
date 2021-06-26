module.exports = {
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      })
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },

  pwa: {
    name: 'nak-sued.stream',
    themeColor: '#5793c9',
    msTileColor: '#5793c9',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestCrossorigin: 'anonymous',
    manifestOptions: {
      background_color: '#5793c9'
    }
  }
}
