/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        12: "12px",
      },
      backgroundImage: {
        NavBar: "url('/Navbar_REct.svg')",
      },
    },
  },
  plugins: [],
};
