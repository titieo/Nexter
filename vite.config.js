import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Nexter/',
    build: { sourcemap: 'inline' },
    server: {
        open: true,
    },
    publicDir: 'img',
})
