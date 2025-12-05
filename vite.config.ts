import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

const plugins = [
    react(),
    tailwindcss(),
]

export default defineConfig ({
    plugins,
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },
    envDir: path.resolve(import.meta.dirname),
    root: path.resolve(import.meta.dirname),
    publicDir: path.resolve(import.meta.dirname, 'public'),
    build: {
        outDir: path.resolve(import.meta.dirname, 'dist/public'),
        emptyOutDir: true,
    }
})