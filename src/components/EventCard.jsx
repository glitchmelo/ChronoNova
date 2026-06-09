export default function EventCard({ event, onDelete }) {
  const formattedDate = new Date(event.date).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="animate-slide-up">
      <div className="relative flex gap-4">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900"></div>
        </div>

        {/* Event content */}
        <div className="pb-12 flex-1">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-200 group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 capitalize">
                  {formattedDate}
                </p>
              </div>
              <button
                onClick={() => onDelete(event.id)}
                className="flex-shrink-0 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Supprimer l'événement"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}