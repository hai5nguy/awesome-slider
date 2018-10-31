const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (_, env) => {
    const isProd = env.mode === 'production'
    const config = {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                { test: /\.jsx?$/,
                    exclude: /node_module/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['@babel/plugin-syntax-class-properties', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    } 
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
        ],
        resolve: {
            alias: {
                actions: resolve(__dirname, 'src/actions'),
                components: resolve(__dirname, 'src/components'),
                store: resolve(__dirname, 'src/store'),
                src: resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            contentBase: './src/static/',
            historyApiFallback: true,
            port: 5000,
        },
        devtool: 'eval-source-map',
    };

    if (isProd) {
        config.plugins.push(
            new CopyWebpackPlugin([
                { from: 'src/static/' },
            ]),
        )
    }

    return config;
};
