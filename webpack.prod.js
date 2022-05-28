require('dotenv').config();

import { LoaderOptionsPlugin } from 'webpack';
import { resolve } from 'path';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';

import baseConfig from './webpack.common.js';

const plugins = [

    new LoaderOptionsPlugin({
        minimize: true,
    }),
     
    new GenerateSW({
        swDest: 'sw.js',
        skipWaiting: true,
        clientsClaim: true,
    }),
];
export default merge(baseConfig, {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'lodash',
            'antd',
        ],
        app: ['@babel/polyfill', resolve(__dirname, 'src/index.tsx')],
    },
    output: {
 
        path: resolve(__dirname, 'docs'),
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
