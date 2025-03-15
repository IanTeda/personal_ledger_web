import path from "path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Protoc code generation command
// TODO: Will need to run a second command when adding a new git submodule folder
// const PROTOC_CODE_GEN_COMMAND =
//   "npx protoc --ts_out src/lib/grpc -I=./protos/authentication ./protos/authentication/**/*.proto --experimental_allow_proto3_optional";

// Build proto code files
// const protocBuild: PluginOption = {
//   name: "proto-plugin",
//   // On Vite build start
//   buildStart() {
//     execSync(PROTOC_CODE_GEN_COMMAND);
//   },

  //TODO: Causing an infinite loop with Vite hot module reload
  // // On Vite watch rebuild (hot update)
  // handleHotUpdate() {
  //   execSync(PROTOC_CODE_GEN_COMMAND);
  // },
// };

//TODO: Do we need to include the tailwind plugin? import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  envDir: "./config",
  plugins: [
    // protocBuild,
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
