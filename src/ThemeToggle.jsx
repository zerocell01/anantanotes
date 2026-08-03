import { useTheme } from './ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Ganti ke tema gelap' : 'Ganti ke tema terang'}
      title={theme === 'light' ? 'Tema gelap' : 'Tema terang'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
