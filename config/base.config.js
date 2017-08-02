var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var currentTarget = process.env.npm_lifecycle_event;

var entry = {
	'page1':'./src/js1.js',
	'page2':'./src/js2.js'
};

var output = {
	path:path.resolve(__dirname,'../dist')
};

var loaders = {
	rules:[
		{
			test:/\.(png|jpg)$/,
			use:['url-loader?limit=4000']
		},
		{
			test:/\.html$/,
			use:[
				{
					loader:'html-loader'
				}
			]
		}
	]
};

var plugins = [
	new CleanWebpackPlugin(['dits'],{
		root:path.resolve(__dirname,'../')
	})
];

Object.keys(entry).forEach(function(key){
	var arg = {
		filename:key + '.html',
		title:key,
		inject:'true',
		chunks:['common',key]
	}
	plugins.unshift(new HtmlWebpackPlugin(arg));
});

module.exports = function(){
	return {
		entry:entry,
		output:output,
		module:loaders,
		plugins:plugins
	}
}
