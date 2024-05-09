import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible'
// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output directory from "dist" to "build"
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'build',
  },
  envPrefix:"REACT_APP_API",
  plugins: [
    reactRefresh(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
