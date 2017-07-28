const baseConfig = require('./base.config.js')();

baseConfig.output.filename = '[name].bundle.js';

module.exports = function(env){
	return baseConfig;
}