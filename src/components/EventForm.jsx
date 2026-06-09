import { useState } from 'react'

export default function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !date) {
      alert('Veuillez remplir tous les champs')
      return
    }

    setIsSubmitting(true)
    // Simulate a brief animation
    setTimeout(() => {
      onAddEvent(title, date)
      setTitle('')
      setDate('')
      setIsSubmitting(false)
    }, 200)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 space-y-4 animate-fade-in border border-slate-200 dark:border-slate-700 sticky top-24"
    >
      <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
        ➕ Nouvel événement
      </h2>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Titre
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex: Découverte de l'Amérique"
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
      >
        {isSubmitting ? '⏳ Ajout...' : '✨ Ajouter'}
      </button>
    </form>
  )
}