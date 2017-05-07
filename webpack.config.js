var path = require ("path");

module.exports = {
  entry : './src/app.js',
  output : {
    path: path.resolve (__dirname, "src/build/"),
    filename : 'bundle.js'
  },

  devServer: {
       contentBase: "./src"
   }

}
