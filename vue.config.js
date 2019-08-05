const PUBLIC_PATH = process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_PUBLIC_PATH
    : '/'

module.exports = {
    lintOnSave: false,
    css: {
        sourceMap: true
    },
    publicPath: PUBLIC_PATH
}
