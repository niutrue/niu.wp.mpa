const webpack = require('webpack');
const baseConfig = require('./base.config.js')();
const webpackMerge = require('webpack-merge');

var devConfig = {
	output:{
		filename:'[name].js'
	},
	module:{
		rules:[
			{
	            test:/\.(css|less)$/,
	            loaders:['style-loader','css-loader?sourceMap','less-loader?sourceMap']
	        },
			{
	            test:/\.js$/,
				exclude:[/node_modules/,/asserts/],
	            use:{
	                loader:'jshint-loader',
	                options:{
	                    esversion:6
	                }
	            }
	        }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	devtool:'eval-source-map',
	devServer:{
		port:8888,
		contentBase:'./dist',
		hot:true
	}
}

module.exports = function(env){
	return webpackMerge(baseConfig,devConfig);
}
