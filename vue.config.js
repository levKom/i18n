const webpack = require('webpack')

module.exports = {
  // publicPath: process.env.BASE_URL,
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    performance: {
      hints:
        process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^http/,
      }),
    ],
  },

  css: {
    sourceMap: true,
  },
  pluginOptions: {
    quasar: {
      treeShake: true,
    },
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/],
}
