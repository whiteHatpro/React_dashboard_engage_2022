require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const baseConfig = require('./webpack.common.js');

const plugins = [

    new webpack.LoaderOptionsPlugin({
        minimize: true,
    }),
     
    new WorkboxPlugin.GenerateSW({
        swDest: 'sw.js',
        skipWaiting: true,
        clientsClaim: true,
    }),
];
module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'lodash',
            'antd',
        ],
        app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.tsx')],
    },
    output: {
 
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/[name].[chunkhash:16].js',
        chunkFilename: 'js/[id].[chunkhash:16].js',
        publicPath: process.env.PUBLIC_URL,
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        unused: true, // tree shaking 
                    }, 
                    ecma: 6,
                    mangle: true,
                    unused: true,
                },
                sourceMap: true,
            }),
        ],
    },
    plugins,
});
