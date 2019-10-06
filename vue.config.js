module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
