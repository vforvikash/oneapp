// build.js
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import cssPlugin from './esbuild_css_plugin';
import {sassPlugin} from 'esbuild-sass-plugin';

esbuild.build({
  entryPoints: ["./src/index.js"],
  outfile: "./public/assets/app.js",
  minify: true,
  bundle: true,
  loader: {
    ".js": "jsx",
    ".js": "mjs",
  },
  plugins: [
        cssPlugin(),
        inlineImage(),
        cssModulesPlugin(),
        sassPlugin()
    ],
})
.catch(() => process.exit(1));