const isMinified = process.env.NODE_ENV === 'production' ? '.min' : ''
const filename = `bundle${isMinified}.js`

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename
  },
  mode: process.env.NODE_ENV || 'development'
};
