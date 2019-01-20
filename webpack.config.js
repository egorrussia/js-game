const path = require('path');
module.exports = {
    watch: true,
    entry: { main: './src/main.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: './public',
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};