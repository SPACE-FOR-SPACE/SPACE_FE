import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    react(),
    mkcert()  // HTTPS 인증서 자동 생성
  ],
  server: {
    https: true, // HTTPS 적용
    host: '0.0.0.0', // 로컬 네트워크에서 접근 가능
    port: 5173, // 포트 변경 가능
  }
});
