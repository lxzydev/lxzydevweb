import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import './App.css'

function App() {
  useEffect(() => {
    const disableDevTools = (e) => {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault()
        return false
      }
    }

    const disableRightClick = (e) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('keydown', disableDevTools)

    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
      document.removeEventListener('keydown', disableDevTools)
    }
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  )
}

export default App
