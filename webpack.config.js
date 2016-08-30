module.exports = {
    entry: './src',
    output: {
        path: 'builds',
        filename: 'bundle.js',
        publicPath: 'builds/' // allows Webpack to find chunks when loading via AJAX
    },
    module: {
        loaders: [
            {
                test: /\.js/, // regex of extension
                loader: 'babel', // name of loader
                include: __dirname + '/src', // path to look for files
            },
            {
                test: /\.scss/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.html/,
                loader: 'html',
            }
        ]
    }
}
