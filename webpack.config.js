var webpack = require('webpack');
var node_dir = __dirname + '/node_modules';

module.exports = {
	entry: ['bootstrap-loader','./src/app.js'],

	output: {
		path: './dist',
		publicPath: "dist",
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},

			{ test: /\.html$/, loader: 'raw-loader' },

			{
				test: /\.json$/,
				exclude: /node_modules/,
				loaders: ['json']

			},

			{
				test: /\.scss$/,
				loaders:['style-loader', 'css-loader', 'sass-loader']
			},
      {
				test: /\.css$/,
				loaders:['style-loader', 'css-loader', 'sass-loader']
			},

			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf)$/,
				loader: 'url-loader?limit=100000'
			},

		]

	},

	 plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

}
