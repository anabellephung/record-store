module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/record-store/'
    : '/'
}