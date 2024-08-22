import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.jsx', 
      name: 'react-audio-canvas',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `react-audio-canvas.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, 
  },
});

