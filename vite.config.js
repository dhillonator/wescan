import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/aboutus.html',
        services: '/services.html',
        pets: '/pets.html',
        gallery: '/gallery.html',
        contact: '/contact.html'
      }
    }
  }
})