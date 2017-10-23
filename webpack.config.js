//ver 1.1
var themeRoot = '233';
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const del = require('del');
const cssnext = require('postcss-cssnext');
if (process.env.THEME_ROOT) {
    themeRoot = process.env.THEME_ROOT;
}
module.exports = {
    entry: ['babel-polyfill', path.resolve(`${themeRoot}/assets/src/theme.js`)],
    output: {
        path: path.resolve(`${themeRoot}/assets/dist`),
        filename: 'theme.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract(['css-loader']) },
            { test: /\.vue/, loader: 'vue-loader', options: require("./vue-loader-options") },
            { test: /\.(jpg|png|gif|svg)/, use: ["url-loader?limit=233&name=images/[name].[ext]"] },
            { test: /\.(eot|ttf|woff)/, use: ['url-loader?limit=233&name=fonts/[name].[ext]'] },
            {
                test: /\.js$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [path.resolve('node_modules/babel-preset-env')],
                    }
                }, exclude: /node_modules/
            },
            {
                test: /\.less$/, use: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'postcss-loader', options: {
                        plugins: [
                            cssnext({ browsers: ['last 3 versions', "Safari >= 8"] }),
                        ]
                    }
                }, 'less-loader'])
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("theme.css"),
    ],
    resolve: {
        modules: [path.resolve(__dirname, "node_modules")],
    },
    externals: {
        jquery: 'jQuery',
        env:/pro/.test(process.env.NODE_ENV)?'"pro"':'"dev"'
    },
    devtool: '#source-map'
}

console.info(process.env.NODE_ENV)
if (/pro/.test(process.env.NODE_ENV)) {
    del.sync(path.resolve(`${themeRoot}/assets/dist`), { force: true });
    module.exports.devtool = "";
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            drop_console: true,
            unused: false,
            side_effects: false,
        }
    }))
}
