const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: "./src/app.js",
  output:{
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
  },
  module:{
    rules:[
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.njk$/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['./src/templates/njk',],
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'Sign_in1.1.html',
      template: './src/templates/njk/Sign_in1.1.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'Password_recovery.html',
      template: './src/templates/njk/Password _recovery.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'Password_recovery_2.html',
      template: './src/templates/njk/Password_recovery_2.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'Password_recovery_3.html',
      template: './src/templates/njk/Password_recovery_3.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'Sign_up_1.html',
      template: './src/templates/njk/Sign_up_1.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'Sign_up_2.html',
      template: './src/templates/njk/Sign_up_2.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'profile_1.html',
      template: './src/templates/njk/profile_1.njk'
    }),
    new HtmlWebpackPlugin({
      filename: 'profile_2.html',
      template: './src/templates/njk/profile_2.njk'
    }),
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback:true
  }
}