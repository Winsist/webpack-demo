const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            //placeholder 占位符
                            name:'[name].[ext]',
                            outputPath:'images',
                            limit:204800
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader", 
                    "css-loader",
                    "less-loader"
                ],
            },
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}