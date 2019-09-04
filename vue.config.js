const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 2000,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },

    proxy: {
      '/api': {
        target: 'http://dedlwz.isart.me/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@c': resolve('src/components'),
        '@l': resolve('src/layout'),
        '@v': resolve('src/views'),
        '@u': resolve('src/utils'),
        '@img': resolve('src/assets/images')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/global";
        `
      }
    }
  }
}