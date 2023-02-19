import { defineConfig } from 'vite'
import { vue } from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/CVue/',
    plugin: [vue()]
})

/*
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/CVue/" : "/",
}; */