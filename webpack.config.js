import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, args) => {
  const isProduction = args.mode === 'production';

  return {
    entry: './src/index.js',

    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },

    resolve: {
      extensions: ['.js'],
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: { maxSize: 8 * 1024 }
          },
          generator: {
            filename: 'images/[name].[contenthash][ext]'
          }
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : 'styles.css'
      })
    ],

    optimization: {
      usedExports:true,
      sideEffects:true,
      minimizer: ['...', new CssMinimizerPlugin()],
      splitChunks: { chunks: 'all' }
    },

    devServer: {
      open: true,
      static: path.resolve(__dirname, 'dist'), 
      historyApiFallback: true,               
    },

    devtool: isProduction ? false : 'source-map'
  };
};