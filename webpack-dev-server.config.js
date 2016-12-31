const webpack = require('webpack');
const path =  require('path');

const buildPath = path.resolve(__dirname,'build');
const nodeModulesPath= path.resolve(__dirname,'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname,'src/index.js'),
    ],
    devServer: {
        contentBase: 'src/www',
        devtool: 'eval',
        hot: true,
        port: 3001,
        host: '0.0.0.0',
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    plugins: [
        //启用实时文件监控，修改任何文件立刻自动编译并刷新页面
        new webpack.HotModuleReplacementPlugin(),
        //检测到错误时提示，但不中断编译
        new webpack.NoErrorsPlugin(),
        //复制静态文件到发布目录
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, 'src')),
    ],
    module: {
        loaders: [
            {
                //React 热加载
                test: /\.js$/,
                loaders: ['react-hot','babel-loader'],
                exclude: [nodeModulesPath],
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            },
        ],
    },
};

module.exports = config;