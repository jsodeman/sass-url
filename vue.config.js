module.exports = {
	devServer: {
	},
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				// eslint-disable-next-line global-require
				implementation: require("sass"),
			},
			css: {
				url: false,
			},
		},
	},
};
