import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' để chạy được ở https://<user>.github.io/lingua/ lẫn khi mở local
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Thư viện ít thay đổi → tách riêng để trình duyệt cache lâu
        manualChunks: { react: ['react', 'react-dom'], antd: ['antd', '@ant-design/icons'] }
      }
    }
  }
});
