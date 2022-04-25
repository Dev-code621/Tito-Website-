const path = require('path')

module.exports = {
    entry: './src/video.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};