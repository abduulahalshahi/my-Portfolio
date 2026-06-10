/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        border:  'var(--bdr)',    // اللون يتغير تلقائي مع الثيم
        accent:  '#6c63ff',
        muted:   'var(--muted)',
        fore:    'var(--fore)',   // لون النص الرئيسي
      },
    },
  },
  plugins: [],
}
