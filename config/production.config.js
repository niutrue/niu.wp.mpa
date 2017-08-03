const webpack = require('webpack');
const baseConfig = require('./base.config.js')();
const ExtractTextPlugin = require("extract-text-webpack-plugin");

baseConfig.output.filename = '[name].js';

baseConfig.plugins.push(
	new webpack.optimize.CommonsChunkPlugin({
	    name:'common',
	    filename:'common.js'
	}),
	new ExtractTextPlugin("[name].css")
);
baseConfig.module.rules.push(
	{
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
			  loader:'css-loader'
		  },{
			  loader:'less-loader'
		  }]
        })
      }
)

module.exports = function(env){
	return baseConfig;
}
