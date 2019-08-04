module.exports = {
    lintOnSave: false,
    css: {
        sourceMap: true
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/markup/'
        : '/'
}
