/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aseguramos que NativeWind escanee el archivo principal y la carpeta src
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Para Expo Router App Directory
    "./src/**/*.{js,jsx,ts,tsx}" // Para la estructura modular /src definida
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}