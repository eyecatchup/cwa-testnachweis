module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cwa-testnachweis/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
