const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/katoharu432/katoharu432.github.io/' : '',
}