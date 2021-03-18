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
                        loader:'file-loader',
                        options:{
                            //placeholder 占位符
                            // name:'images/[name].[ext]'
                            name:'[name].[ext]',
                            outputPath:'images'
                        }
                    }
                ]
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}