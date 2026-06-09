import { useState, useEffect } from 'react'
import EventForm from './components/EventForm'
import Timeline from './components/Timeline'
import { exportToPNG, exportToPDF } from './utils/export'

export default function App() {
  const [events, setEvents] = useState([])
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Load events from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chronova-events')
    if (saved) {
      try {
        setEvents(JSON.parse(saved))
      } catch (err) {
        console.error('Failed to load events:', err)
      }
    }
  }, [])

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chronova-events', JSON.stringify(events))
  }, [events])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const addEvent = (title, date) => {
    const newEvent = {
      id: Date.now(),
      title,
      date,
      createdAt: new Date().toISOString(),
    }
    setEvents([...events, newEvent])
  }

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
  }

  const resetAll = () => {
    if (window.confirm('Êtes-vous sûr ? Cette action est irréversible.')) {
      setEvents([])
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                ⏱
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">ChronoNova</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Frises chronologiques modernes</p>
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-2xl"
              aria-label="Basculer mode sombre"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Event Form */}
            <div className="lg:col-span-1">
              <EventForm onAddEvent={addEvent} />
            </div>

            {/* Timeline */}
            <div className="lg:col-span-2">
              <div data-export="timeline">
                <Timeline events={events} onDelete={deleteEvent} />
              </div>

              {/* Export & Reset Buttons */}
              {events.length > 0 && (
                <div className="mt-8 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={exportToPNG}
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      📷 PNG
                    </button>
                    <button
                      onClick={exportToPDF}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      📄 PDF
                    </button>
                  </div>
                  <button
                    onClick={resetAll}
                    className="w-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    🗑️ Réinitialiser
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}