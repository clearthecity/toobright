const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['en-us']
    }),
    new WorkboxPlugin.GenerateSW()
  ]
}
