const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports ={
    entry: {
        main: './server.ts',
    },
    output: {
        path: path.join(__dirname, '../build'),
        publicPath: '/',
        filename: '[name].js',
        clean: true,
    },
    mode: 'production',
    target: 'node',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        })],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    // loader:"babel-loader"
                    options: {
                        transpileOnly: true, // Speeds up compilation
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','**/*.ts'],
    },
};
// npm i -D webpack webpack-cli webpack-node-externals
// npm i -D @babel/core babel-loader
// npm i -D ts-loader