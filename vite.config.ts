import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import styleImport from 'vite-plugin-style-import'

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        resolveStyle: (name) => {
          //这里我没有引入less的css 文件因为我已经安装过了sass 不想重复安装一个预编译器。
          //如果您的项目只需要ant 或者 两者都需要，请使用less。
          return `ant-design-vue/es/${name}/style/index.css`;
        },
        resolveComponent: (name) => {
          return `ant-design-vue/es/${name}/index.js`;
        },
      }]
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    }
  },
  base: './',
  server: {
    open: false,
    host: 'localhost',
    port: 5916,
    https: false,
    proxy: {
      '/api': {
        target: 'https://iiter.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/a/, '')
      },
    }
  },
  build: {
    base: "",
    outDir: 'dist',
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser'
  }
})
