module.exports = {
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        port: 9010,
    },
    runtimeCompiler: true,
    pages: {
        index: 'src/main.js',
    },
};
