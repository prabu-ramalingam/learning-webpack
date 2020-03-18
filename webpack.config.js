const path = require('path');

module.exports = {        

    context: path.join(__dirname, './src') ,
    entry: './index.js',
    output: {
        path: __dirname,
        filename:'bundle.js'
    }   
   
};