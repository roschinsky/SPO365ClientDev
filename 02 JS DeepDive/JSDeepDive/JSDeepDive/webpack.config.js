const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './Layouts/JavaScript/webpack/'),
    entry: {
        app: './app.js'
    },
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./Layouts/JavaScript/bundle/")
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["es2015"] }
                    }
                ]
            }
        ]
    }
};