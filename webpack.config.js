"use strict";

var path = require("path");
var config = (module.exports = {
  mode: "development",
});

config.context = __dirname;

// Specify your entries, I store all my webpack managed JavaScript in
// app/webpack, as per my earlier requirements.
config.entry = {
  cart: "./app/webpack/cart.js",
};

// This outputs an entry named 'foobar' into
// app/assets/javascripts/entries/foobar.js.
config.output = {
  path: path.join(__dirname, "app/assets/javascripts/entries"),
  filename: "[name].js",
};

// Use babel-loader for our *.js files.
config.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ],
};
