import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        solid({ hot: false }),
        tsconfigPaths()
    ],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./setup.vitest.ts"],
        css: false,
        deps: {
            optimizer: {
                web: {
                    include: ["solid-js"],
                },
            },
        },
    },
    resolve: {
        conditions: ["development", "browser"],
    },
});