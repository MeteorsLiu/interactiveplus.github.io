// import preact from '@preact/preset-vite';
import { resolve } from "path";
import { defineConfig } from "vite";
import hugoPlugin from "vite-hugo-plugin";

// Root directory of our application
const appDir = __dirname;

// The directory where hugo builds it's files.
const hugoOutDir = resolve(appDir, "public");

const ignoreHTMLFiles = [];
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // preact(), // Specify preact plugin, we will need that later
        hugoPlugin({ appDir, hugoOutDir, ignoreHTMLFiles }), // Hugo plugin that configures vite to work with hugo
    ],
    build: {
        assetsInlineLimit: 0,
        // 在 outDir 中生成 manifest.json
        manifest: true,
    },
    // server: {
    //     watch: {
    //         usePolling: true,
    //     },
    // },
});
hugoPlugin({ appDir, hugoOutDir, ignoreHTMLFiles });
