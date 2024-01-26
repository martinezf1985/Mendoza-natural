// tailwind.config.js
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        brown: "#8B4513", // Puedes personalizar el código de color según tus preferencias
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
