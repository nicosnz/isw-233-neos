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
            filename: isProduction
                ? '[name].[contenthash].js'
                : 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            }),

            new MiniCssExtractPlugin({
                filename: isProduction
                    ? '[name].[contenthash].css'
                    : 'styles.css'
            })
        ],

        optimization: {
            minimizer: [
                '...',
                new CssMinimizerPlugin() 
            ]
        },

        devServer: {
            open: true,
            static: './public'
        },

        devtool: isProduction ? false : 'source-map'
    };
};