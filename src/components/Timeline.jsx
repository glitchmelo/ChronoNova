import EventCard from './EventCard'

export default function Timeline({ events, onDelete }) {
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  if (sortedEvents.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-12 text-center border border-slate-200 dark:border-slate-700 animate-fade-in">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Aucun événement
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          Commencez à ajouter des événements pour créer votre frise chronologique
        </p>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
          ⏰ Frise Chronologique
        </h2>

        <div className="relative pl-4">
          {/* Main timeline line */}
          <div className="absolute left-1.5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-purple-600 dark:from-indigo-600 dark:via-purple-600 dark:to-purple-700 rounded-full"></div>

          {/* Events */}
          <div className="space-y-2">
            {sortedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            📊 Total: <span className="font-semibold text-slate-900 dark:text-white">{sortedEvents.length}</span> événement(s)
          </p>
          {sortedEvents.length > 0 && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              ⏱️ Durée: <span className="font-semibold text-slate-900 dark:text-white">
                {new Date(sortedEvents[sortedEvents.length - 1].date).getFullYear() -
                  new Date(sortedEvents[0].date).getFullYear() + 1} an(s)
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}