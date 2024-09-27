import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' for local network access
    port: 3000,        // adjust the port if needed
    open: true,        // automatically open the browser on start
    watch: {
      usePolling: true, // helps with file watching issues in some environments
      interval: 100,    // polling interval in milliseconds
    },
  },

});
