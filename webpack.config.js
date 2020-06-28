//entry-->output
//node thing to expose a obj
//To make consistent path accross all the os for this folder on system,importing node fn to join the path.
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  //-->Path object
  output: {
    //_dirname -->Absolute path to this project on this machine
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
