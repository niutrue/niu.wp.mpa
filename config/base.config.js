var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var currentTarget = process.env.npm_lifecycle_event;

var entry = {
	'page1':'./src/pages/page1/entry.js',
	'page2':'./src/pages/page2/entry.js'
};

var output = {
	path:path.resolve(__dirname,'../dist')
};

var loaders = {
	rules:[
		{
			test:/\.js$/,
			exclude:/node_modules/,
			use:{
				loader:'babel-loader',
				options:{
					presets:['es2015']
				}
			}
		},
		{
			test:/\.(png|jpg)$/,
			use:['url-loader?limit=4000']
		},
		{
			test:/\.pug$/,
			loaders:['html-loader','pug-html-loader']
		}
	]
};

var resolve = {
	alias:{
		images:'../../asserts/images'
	}
}

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
		plugins:plugins,
		resolve:resolve
	}
}
