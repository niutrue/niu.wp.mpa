function Config(env){
	return require(`./config/${env}.config.js`)(env);
}

module.exports = Config;