/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: { teal: { 50:'#effcf8',100:'#d8f7ee',500:'#159b83',700:'#087565',900:'#064b43' }, mint:'#effcf8', coral:'#ef765e', slate:{ 50:'#f8fafc',100:'#f1f5f9',500:'#64748b',700:'#334155',900:'#0f172a' } },
      spacing: { 18:'4.5rem', 22:'5.5rem' },
      borderRadius: { '2xl':'1.25rem', '3xl':'1.75rem' },
      boxShadow: { soft:'0 18px 50px rgba(6,75,67,.10)', float:'0 25px 70px rgba(6,75,67,.16)' },
      fontFamily: { display:['DM Sans','sans-serif'], ui:['Inter','sans-serif'] },
    },
  },
  plugins: [],
};
