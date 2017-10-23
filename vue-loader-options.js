var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano')
var path = require('path');

var presetpath = path.resolve('node_modules/babel-preset-env');

//only available in .vue
module.exports = {
    loaders: {
        js:`${path.resolve('node_modules/babel-loader')}?presets=${presetpath}`
        

    },

}

// if (/production/.test(process.env.NODE_ENV)) {
//     module.exports.postcss.push(cssnano())
// }