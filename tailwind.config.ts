/** @type {import('tailwindcss').Config} */

import { DEFAULT_CIPHERS } from "tls";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    rotate: {
      "90": "90deg",
    },
    extend: {
      fontFamily: {
        sans: ["'Manrope'"],
        Roboto: ["'Roboto"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4169E1",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#0C4DA2",
          foreground: "hsl(var(--secondary-foreground))",
        },
        head: {
          DEFAULT: "var(--neutral-900, #2C2C2C)",
          foreground: "hsl(var(--head-foreground))",
        },
        subHead: {
          DEFAULT: "var(--neutral-700, #444)",
          foreground: "hsl(var(--subhead-foreground))",
        },
        lightBlue: {
          DEFAULT: "#E2ECFB",
        },
        indigo: {
          DEFAULT: "#0C4DA2",
          foreground: "#fff",
        },
        violet: {
          DEFAULT: "#1A2C79",
        },
        cream: {
          DEFAULT: "#F8F8F8",
        },
        grey: {
          DEFAULT: "#656567",
        },
        lightGrey: {
          DEFAULT: "#707070",
        },
        ashGrey: {
          DEFAULT: "#D9D9D6",
        },
        wolfGrey: {
          DEFAULT: "#4D4D4D",
        },
        onyx: {
          DEFAULT: "#363636",
        },
        charcoal: {
          DEFAULT: "#323232",
        },
        pearl: {
          DEFAULT: "#E9E9EC",
        },
        frost: {
          DEFAULT: "#F6FAFF",
        },
        blue: {
          DEFAULT: "#2375E0",
        },
        waterBlue: {
          DEFAULT: " rgba(255, 255, 255, 0.30)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        darkGreen: {
          DEFAULT: "#336E64",
        },
        grayTone: {
          DEFAULT: "#525266",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
