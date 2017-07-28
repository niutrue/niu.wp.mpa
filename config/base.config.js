var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var currentTarget = process.env.npm_lifecycle_event;

module.exports = function(){
	return {
		entry:{
			js1:'./src/index.js',
			js99:'./src/js2.js'
		},
		output:{
			path:path.resolve(__dirname,'../dist')
		},
		plugins:[
			new CleanWebpackPlugin(['dist'],{
				root:path.resolve(__dirname,'../'),
			}),
			new HtmlWebpackPlugin({
				title:'index'
			})
		]
	}
}