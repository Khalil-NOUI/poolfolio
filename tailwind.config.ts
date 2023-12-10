import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        priColor: 'rgb(52, 152, 219)',
        secColor: 'rgb(46, 204, 113)',
        accColor: 'rgb(231, 76, 60)',
        neuColor: 'rgb(245, 245, 245)',
        txtColor: 'rgb(51, 51, 51)',
        hghColor: 'rgb(243, 156, 18)',
      },
    },
  },
  plugins: [],
}
export default config
