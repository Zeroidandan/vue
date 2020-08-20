//默认暴露一个配置，因为webpack是基于node.js的，这里是node.js的暴露语法
module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        publicPath:'xuni'
    },
    devServer:{
        port:8080,
        contentBase:'./www'
    }
};