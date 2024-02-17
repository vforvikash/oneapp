// serve.js
import esbuild from "esbuild";
import inlineImage from "esbuild-plugin-inline-image";
import cssModulesPlugin from "esbuild-css-modules-plugin";

const config = {
    entryPoints: ["./src/index.js"],
    outfile: "./public/assets/app.js",
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    plugins: [inlineImage()],
  };

const ctx = await esbuild.context(config)
await ctx.serve(
    {
      servedir: "public",
      port: 8080,
    },
  )
  .catch(() => process.exit());