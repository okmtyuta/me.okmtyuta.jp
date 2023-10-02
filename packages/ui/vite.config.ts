import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import pkg from './package.json'

export default defineConfig({
  resolve: {
    alias: {}
  },
  build: {
    // cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      entry: {
        index: resolve(__dirname, 'src', 'index.ts'),
        header: resolve(__dirname, 'src', 'components', 'header')
      }
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
})
