const VueLoaderPlugin = require('vue-loader/lib/plugin');

//默认暴露一个配置，因为webpack是基于node.js的，这里是node.js的暴露语法
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'xuni'
    },
    devServer: {
        port: 8080,
        contentBase: './www'
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      lessOptions: {
                        strictMath: true,
                      },
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};