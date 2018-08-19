module.exports = {
	entry: "./src/bootstrap.jsx",
	output: {
		filename: "./dist/ickt.js"
	},
	module: {
		rules:[
			{
				test: /\.jsx$/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}
		]
	}
}