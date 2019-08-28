const path = require('path');
const devtool = 'inline-source-map';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/app.ts'),
  output: {
    filename: 'app.js',
    path: __dirname
  },
  devServer: {
    port: 3001,
    //hot: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, '/html'),
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader', {
          loader: 'sass-loader',
          options: {
            paths: [path.resolve(__dirname, "node_modules")],
          }
        },
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'
      }

    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
  ]
};




  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         'style-loader', // creates style nodes from JS strings
  //         'css-loader', // translates CSS into CommonJS
  //         'sass-loader', // compiles Sass to CSS, using Node Sass by default
  //       ],
  //     },
  //   ],
  // },


// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [
//             {
//               loader: 'style-loader',
//             },
//             {
//               loader: 'css-loader',
//             },
//             {
//               loader: 'sass-loader',
//               options: {
//                 includePaths: ['absolute/path/a', 'absolute/path/b'],
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };
