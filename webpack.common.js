 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
   },
  output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: "./src/template.html",
     }),
    new FaviconsWebpackPlugin({
  logo: "./src/favicon/Elegantthemes-Beautiful-Flat-Weather.32.png",
  cache: true,
  inject: true,
  prefix: "assets/",
  favicons: {
    appName: "weather-app",
    appShortName: "weather",
    appDescription: "retrieve weather info anywhere in the world",
    background: "#5493f7",
    theme_color: "#00008b",
    start_url: "/weather-app/?homescreen=1",
    display: "standalone",
    orientation: "portrait",
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: true,
      yandex: false
    }
  }
}) 
], 

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
        filename: 'assets/fonts/[name][ext]'
      }
    },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.json$/,
        type: "json"
      },
    ],
  },
};