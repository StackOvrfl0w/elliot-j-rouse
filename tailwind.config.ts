import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "warm-bg": "var(--color-warm-bg)",
        "warm-panel": "var(--color-warm-panel)",
      },
    },
  },
};

export default config;
