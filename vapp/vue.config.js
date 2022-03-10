const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const cdn = {
    css: [
    ],
    js: [
        '/cdn/vue.js',
        '/cdn/vuex.js',
        '/cdn/vue-router.min.js',
        '/cdn/axios.min.js',
    ]
};

module.exports = {
    publicPath:'/',
    outputDir:__dirname+'/build',
    assetsDir:'',
    indexPath:'./index.html',
    filenameHashing:true,
    productionSourceMap: true,
    devServer: {
        proxy: {
            "/api/v1/": {
                target: "http://158.247.224.99:5577",
                changeOrigin: true,
            }
        }
    },
    chainWebpack: config => {
        const imagesRule = config.module.rule("images");
        imagesRule
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 1024 }));
        if (isProduction) {
            // 删除预加载
            config.plugins.delete('preload');
            config.plugins.delete('prefetch');
            // 压缩代码
            config.optimization.minimize(true);
            // 分割代码
            config.optimization.splitChunks({
                chunks: 'async',
            });
            //别名
            //config.resolve.alias.set('_base',resolve('src/base'));
            // 生产环境注入cdn
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = cdn;
                    return args;
                });
        }

    },
    configureWebpack: config => {
        if (isProduction) {
            // 用cdn方式引入
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            };
            // 为生产环境修改配置...
            config.plugins.push(
                //生产环境自动删除console
                // new UglifyJsPlugin({
                //     uglifyOptions: {
                //         compress: {
                // warnings: false,
                // drop_debugger: true,
                // drop_console: true,
                // },
                // },
                // sourceMap: false,
                // parallel: true,
                // })
            );
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: /\.js$|\.html$|\.css/,
                    threshold: 10000,
                    // deleteOriginalAssets: true
                    deleteOriginalAssets: false
                })
            );
            config.optimization= {
                splitChunks: {
                    chunks: "async",
                    minSize: 300,
                    minChunks: 2,
                    cacheGroups: {
                        vendor:{
                            chunks:"all",
                            // test: /node_modules/,
                            test: /[\\/]node_modules[\\/]/,
                            name(module){
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                                return `chunk.${packageName.replace('@', '')}`;
                            },
                            // name:"vendor",
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 300,
                            priority:100,
                        },
                        common: {
                            chunks:"all",
                            test:/[\\/]src[\\/]js[\\/]/,
                            name: "common",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority:60
                        },
                        styles: {
                            chunks: 'all',
                            test: /\.(sa|sc|c|le)ss$/,
                            name: 'styles',
                            enforce: true,
                        },
                        // runtimeChunk: {
                        //     name: 'manifest'
                        // }
                    }
                }
            }
        } else {
            // 为开发环境修改配置...
        }
    }
}
