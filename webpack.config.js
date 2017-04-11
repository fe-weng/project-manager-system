/**
 * Created by 51212 on 2017/4/5.
 */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

function hotMidConcat(path){
    return ['webpack-hot-middleware/client'].concat(path);
}

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: hotMidConcat(['./src/index']),
        vendors: ['react', 'react-dom', 'react-router', 'react-router-dom']
    },
    output : {
        filename : "[name].js",
        path : path.resolve(__dirname, 'build'),
        publicPath : '/build/'
    },
    module : {
        loaders : [{
            test : /\.(jsx|js)$/,
            exclude : [
                path.resolve(__dirname, 'node_modules')
            ],
            loader : ['react-hot-loader', 'babel-loader']
        },{
            test : /\.scss$/,
            loader : 'style-loader!css-loader!sass-loader'
        },{
            test : /\.css$/,
            loader : 'style-loader!css-loader'
        }]
    },
    resolve : {
        extensions : ['.js', '.jsx', '.scss', '.css']
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({name : 'vendors', filename : 'vendors.js'}),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

