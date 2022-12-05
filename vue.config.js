const {defineConfig} = require('@vue/cli-service')
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    publicPath:process.env.NODE_ENV==='production'?'./':'/',
    transpileDependencies: true,
    // eslint-disable-next-line no-unused-vars
    chainWebpack(config) {


        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
})
