const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "imports-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^dojo\/text!/, function(data) {
            data.request = data.request.replace(/^dojo\/text!/, '!html-loader!');
        })
    ],
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 3000
    },
    devtool: "#source-map"
};
