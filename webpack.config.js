import path from 'path' ;
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// export default {
//     entry:'./src/index.js',
//     output: {
//         filename:'index.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module:{
//         rules:[
//             {
//                 test: /\.css$/,
//                 use:[MiniCssExtractPlugin.loader,'css-loader']
//             }
//         ]
//     },
//     plugins:[
//         new HtmlWebpackPlugin({template:'src/index.html'}),
//         new MiniCssExtractPlugin({filename:''})
//     ],
//     devServer : {
//         open:true
//     },
//     devtool:'source-map'
// }

export default (env,args) => {
    const {mode} = args;
    const isProduction = mode === 'production'
    return {
        entry:'./src/index.js',
        output: {
            filename:'[main].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean:true
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    use:[MiniCssExtractPlugin.loader,'css-loader']
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({template:'src/index.html'}),
            new MiniCssExtractPlugin({filename:'styles.css'})
        ],
        devServer : {
            open:true
        },
        devtool:'source-map'
    }
}