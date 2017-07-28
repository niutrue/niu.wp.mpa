const webpack = require('webpack');
const baseConfig = require('./base.config.js')();

baseConfig.output.filename = '[name].bundle.js';
baseConfig.devtool = 'eval-source-map';
baseConfig.devServer = {
	port:8888,
	contentBase:'./dist',
	hot:true
}

baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = function(env){
	return baseConfig;
}