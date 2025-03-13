import routify from '@roxi/routify/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';


const production = process.env.NODE_ENV === 'production';



// // this is how you have different settings per build type
// export default defineConfig((p) => {
//   // for serve and for build
//   const env = loadEnv(p.mode, process.cwd(), '');
//   if (p.command === 'serve') {

//   } else if (p.command === 'build') {

//   }

//   return {
//     // Vite config options
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//     plugins: [
//       svelte({
//         compilerOptions: {
//           // runes: true // Enable runes mode
//           dev: !production
//         },
//       }),
//       routify(),
//     ],
//     server: {
//       port: 5200
//     }
//   };
// });

export default defineConfig({
  resolve: {
    alias: {
      "@": process.cwd() + "/src",
      "shut": process.cwd() + "/node_modules/shut/src",
    },
  },
  // mode: production ? 'build' : 'dev', this can be changed vite build --mode
  plugins: [
    svelte({
      compilerOptions: {
        // runes: true // Enable runes mode
        dev: !production
      },
    }),
    routify(),
  ],
  server: {
    port: 5200,
    hmr: false,
    watch: {
      usePolling: false
    }
  },
});
