import { useEffect, useState } from 'react'

// 主题：dark / light，持久化到 localStorage，并写到 <html data-theme>
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('fr-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('fr-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggleTheme }
}
