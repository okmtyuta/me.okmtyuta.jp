import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {}
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: resolve(__dirname, 'src', 'index.ts'),
        header: resolve(__dirname, 'src', 'components', 'header')
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'clsx', '@okmtyuta/amatelas'],
      output: {
        globals: {
          react: 'React',
          ReactDOM: 'react-dom'
        }
      }
    }
  },
  plugins: [react()]
})
