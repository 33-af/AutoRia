import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        thirdlyColor: "var(--thirdlyColor)",
        darkGreyColor: "var(--darkGreyColor)",
        whiteColor: "var(--whiteColor)",
        semiTransparentGray: "var(--semiTransparentGray)",
      },
      fontFamily: {
        jakarta: "var(--mainFontFamily)",
      },
      spacing: {
        btnWidth: "var(--btn-width)",
        pt: "var(--pt)",
        pb: "var(--pb)",
        pr: "var(--pr)",
        pl: "var(--pl)",
      },
    },
  },
  plugins: [],
} satisfies Config;
