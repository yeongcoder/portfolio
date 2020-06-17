module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio/'
      : '/',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
}
