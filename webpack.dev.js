require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.common.js');

const devPort = process.env.DEV_PORT;
const host = process.env.DEV_HOST;

const proxyHTTP = process.env.DEV_PROXY_HTTP;
const proxyWS = process.env.DEV_PROXY_WS;

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        bundle: [
            '@babel/polyfill',
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${host}:${devPort}`,
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, 'src/index.tsx'),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].[hash:16].js',
        chunkFilename: '[id].[hash:16].js',
    },
    devServer: {
        inline: true,
        port: devPort,
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        host,
        proxy: {
            '/api': {
                target: proxyHTTP,
            },
            '/api/ws': {
                target: proxyWS,
                ws: true,
            },
        },
        headers: {
            'X-Frame-Options': 'sameorigin', // used iframe
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
    ],
});
