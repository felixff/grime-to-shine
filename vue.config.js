const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss"; 
          @import "@/styles/_main.scss"; 
          @import "@/styles/_globals.scss";
          @import "@/styles/_animations.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://127.0.0.1:80',
        pathRewrite: {
          '^/api' : '/'
        },
        changeOrigin: true, // so CORS doesn't bite us.
        secure:false
      }
    }
  }
})