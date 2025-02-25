import path from "path";
import { defineConfig, PluginOption } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { execSync } from "child_process";

// Protoc code generation command
const PROTOC_CODE_GEN_COMMAND =
  "npx protoc --ts_out src/lib/grpc -I=./protos/ ./protos/**/*.proto --experimental_allow_proto3_optional";

// Build proto code files
const protocBuild: PluginOption = {
  name: "proto-plugin",
  // On Vite build start
  buildStart() {
    execSync(PROTOC_CODE_GEN_COMMAND);
  },

  //TODO: Causing an infinite loop with Vite hot module reload
  // // On Vite watch rebuild (hot update)
  // handleHotUpdate() {
  //   execSync(PROTOC_CODE_GEN_COMMAND);
  // },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    protocBuild,
    TanStackRouterVite(),
    viteReact()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
