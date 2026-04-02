import path from 'path' ;
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugin:[
        new HtmlWebpackPlugin({template:'src/index.html'})
    ],
    devServer : {
        open:true
    }
}