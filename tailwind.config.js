module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: '#1F2235',
        lightBlue: '#313552',
        lightYellow: '#FFC276',
        black: '#000000',
        white: '#FFFFFF',
        cyan: '#00FFFF',
        ebonyClay: '#232737',
        vuejs: '#41B883',
        bootstrap: '#5a3e79',
        laravel: '#F05340',
        docker: '#0db7ed',
        ubuntu: '#DD4814',
        github: '#211F1F',
        git: '#f34f29',
        vscode: '#0078d7',
        charade: '#252c3c',
        tuna: '#2e344b',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        playFair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        'arrow-right': {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'arrow-right': 'arrow-right 1s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
