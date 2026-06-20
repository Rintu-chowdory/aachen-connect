import { useState } from 'react'
import { MapPin, Clock, Search, X } from 'lucide-react'
import { useLang } from '../context/LangContext.jsx'

const events = [
  { date: '28. Jun', month: '2025', title_de: 'Altstadtfest Aachen', title_en: 'Old Town Festival Aachen', location: 'Altstadt & Marktplatz', time: '14:00 – 22:00', cat_de: 'Stadtfest', cat_en: 'City Festival', desc_de: 'Das jährliche Altstadtfest mit Live-Musik, Ständen und Vorführungen rund um den historischen Marktplatz.', desc_en: 'The annual old town festival with live music, stalls and performances around the historic market square.', color: 'bg-blue-600' },
  { date: '5.–13. Jul', month: '2025', title_de: 'CHIO Aachen 2025', title_en: 'CHIO Aachen 2025', location: 'Reitanlage Soers', time: 'ganztägig / all day', cat_de: 'Sport', cat_en: 'Sport', desc_de: 'Das weltberühmte Reitturnier – „Wimbledon des Reitsports" – mit internationaler Beteiligung.', desc_en: 'The world-famous equestrian tournament — the "Wimbledon of equestrian sport" — with international participation.', color: 'bg-green-600' },
  { date: '12. Jul', month: '2025', title_de: 'Stadtführung Dom & Rathaus', title_en: 'Cathedral & Town Hall Tour', location: 'Katschhof / Domhof', time: '10:00', cat_de: 'Kultur', cat_en: 'Culture', desc_de: 'Geführte Tour durch UNESCO-Welterbe Aachener Dom und das historische Rathaus mit Stadtführer.', desc_en: 'Guided tour through UNESCO World Heritage Aachen Cathedral and the historic Town Hall with a city guide.', color: 'bg-purple-600' },
  { date: '19. Jul', month: '2025', title_de: 'Open-Air Kino Lousberg', title_en: 'Open-Air Cinema Lousberg', location: 'Lousberg', time: 'ab 21:00 / from 9 pm', cat_de: 'Film', cat_en: 'Film', desc_de: 'Sommerfilme unter freiem Himmel auf dem Lousberg – Decke mitbringen empfohlen.', desc_en: 'Summer films under the open sky on the Lousberg — bringing a blanket is recommended.', color: 'bg-amber-600' },
  { date: '26. Jul', month: '2025', title_de: 'Karneval der Kulturen', title_en: 'Carnival of Cultures', location: 'Pontstraße', time: '15:00 – 23:00', cat_de: 'Kultur', cat_en: 'Culture', desc_de: 'Interkulturelles Fest mit Musik, Tanz und Speisen aus aller Welt in der Pontstraße.', desc_en: 'Intercultural festival with music, dance and food from around the world in the Pontstraße.', color: 'bg-pink-600' },
  { date: '2. Aug', month: '2025', title_de: 'Radmarathon Aachen–Düren', title_en: 'Cycling Marathon Aachen–Düren', location: 'Start: Marktplatz', time: '8:00', cat_de: 'Sport', cat_en: 'Sport', desc_de: 'Beliebter Radmarathon durch die Aachener Region mit verschiedenen Distanzen für alle Leistungsklassen.', desc_en: 'Popular cycling marathon through the Aachen region with various distances for all fitness levels.', color: 'bg-teal-600' },
  { date: '16. Aug', month: '2025', title_de: 'Klassik Open Air', title_en: 'Classics Open Air', location: 'Elisenbrunnen', time: 'ab 19:30 / from 7:30 pm', cat_de: 'Musik', cat_en: 'Music', desc_de: 'Klassikkonzert am Elisenbrunnen mit dem Sinfonieorchester Aachen bei freiem Eintritt.', desc_en: 'Classical concert at the Elisenbrunnen with the Aachen Symphony Orchestra — free admission.', color: 'bg-indigo-600' },
  { date: '6.–7. Sep', month: '2025', title_de: 'Mediaevent – Kaisergeschichten', title_en: 'Mediaeval Event – Imperial Tales', location: 'Domhof', time: '10:00 – 18:00', cat_de: 'Geschichte', cat_en: 'History', desc_de: 'Mittelalterliches Spektakel rund um Karls des Großen Erbe – Handwerk, Kostüme und historische Vorführungen.', desc_en: "Mediaeval spectacle around Charlemagne's legacy — crafts, costumes and historical demonstrations.", color: 'bg-red-700' },
]

const catColorMap = {
  Stadtfest: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'City Festival': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Sport: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Kultur: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Culture: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Film: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Musik: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Music: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Geschichte: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  History: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}

export default function Events() {
  const { lang, tr } = useLang()
  const t = tr.events
  const [active, setActive] = useState(t.all)
  const [query, setQuery] = useState('')

  const allCat = t.all
  const categories = [allCat, ...Array.from(new Set(events.map(e => lang === 'en' ? e.cat_en : e.cat_de)))]

  const filtered = events.filter(e => {
    const cat = lang === 'en' ? e.cat_en : e.cat_de
    const title = lang === 'en' ? e.title_en : e.title_de
    const desc = lang === 'en' ? e.desc_en : e.desc_de
    const matchCat = active === allCat || cat === active
    const q = query.toLowerCase()
    const matchSearch = !q || title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q) || desc.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <div className="relative mb-5">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none focus:border-[#003D73] focus:ring-2 focus:ring-[#003D73]/10 transition-all"
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              active === cat
                ? 'bg-[#003D73] text-white border-[#003D73] shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-[#003D73] hover:text-[#003D73]'
            }`}>
            {cat}
            {cat !== allCat && (
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${active === cat ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                {events.filter(e => (lang === 'en' ? e.cat_en : e.cat_de) === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">
        {t.results(filtered.length)}
        {active !== allCat ? ` ${t.in} „${active}"` : ''}
        {query ? ` ${t.for} „${query}"` : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 dark:text-gray-500">{t.noResults}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(e => {
            const title = lang === 'en' ? e.title_en : e.title_de
            const desc = lang === 'en' ? e.desc_en : e.desc_de
            const cat = lang === 'en' ? e.cat_en : e.cat_de
            return (
              <div key={e.title_de} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex">
                <div className={`${e.color} text-white flex flex-col items-center justify-center px-4 shrink-0 min-w-[72px]`}>
                  <span className="text-2xl font-bold leading-none">{e.date.split('.')[0]}.</span>
                  <span className="text-xs opacity-80 mt-1">{e.month}</span>
                </div>
                <div className="p-4 flex-1">
                  <div className="mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColorMap[cat] || 'bg-gray-100 text-gray-600'}`}>{cat}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 line-clamp-2">{desc}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1"><MapPin size={11} />{e.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{e.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
