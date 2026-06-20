import { useState } from 'react'
import { Clock, ChevronRight, Search, X } from 'lucide-react'
import { useLang } from '../context/LangContext.jsx'

const articles = [
  {
    cat_de: 'Stadtentwicklung', cat_en: 'Urban Development', date: '19. Jun 2025',
    title_de: 'Neues Fahrradwegenetz: 15 km neue Radwege bis 2026',
    title_en: 'New Cycling Network: 15 km of New Bike Paths by 2026',
    summary_de: 'Die Stadt Aachen investiert 8 Millionen Euro in den Ausbau des Radwegenetzes. Bis Ende 2026 entstehen 15 Kilometer neue Radinfrastruktur entlang der Hauptverkehrsachsen.',
    summary_en: 'The City of Aachen is investing 8 million euros in expanding the cycling network. By end of 2026, 15 kilometres of new cycling infrastructure will be built along the main transport axes.',
    color: 'bg-blue-600',
  },
  {
    cat_de: 'Bildung', cat_en: 'Education', date: '17. Jun 2025',
    title_de: 'RWTH Aachen unter Top 10 europäischer Ingenieurshochschulen',
    title_en: 'RWTH Aachen Among Top 10 European Engineering Universities',
    summary_de: 'Im aktuellen QS-Ranking belegt die RWTH Aachen erneut einen Spitzenplatz unter den besten Ingenieurshochschulen Europas. Über 45.000 Studierende aus 120 Nationen sind eingeschrieben.',
    summary_en: 'In the latest QS ranking, RWTH Aachen again holds a top position among the best engineering universities in Europe. Over 45,000 students from 120 nations are enrolled.',
    color: 'bg-purple-600',
  },
  {
    cat_de: 'Nachhaltigkeit', cat_en: 'Sustainability', date: '15. Jun 2025',
    title_de: 'Aachen wird bis 2030 klimaneutral: Masterplan vorgestellt',
    title_en: 'Aachen to Become Climate Neutral by 2030: Masterplan Unveiled',
    summary_de: 'Der Stadtrat hat den Klimamasterplan verabschiedet. Kernelement: 100% erneuerbare Energie bei STAWAG und Förderung von 10.000 Photovoltaikanlagen auf privaten Dächern.',
    summary_en: 'The city council has adopted the climate masterplan. Key element: 100% renewable energy at STAWAG and support for 10,000 photovoltaic installations on private rooftops.',
    color: 'bg-green-600',
  },
  {
    cat_de: 'Tourismus', cat_en: 'Tourism', date: '13. Jun 2025',
    title_de: 'Aachener Dom: Restaurierungsarbeiten abgeschlossen',
    title_en: 'Aachen Cathedral: Restoration Work Complete',
    summary_de: 'Nach dreijähriger Restaurierung erstrahlt der Aachener Dom wieder in vollem Glanz. Das UNESCO-Welterbe empfängt jährlich über eine Million Besucher aus aller Welt.',
    summary_en: 'After three years of restoration, Aachen Cathedral shines in full splendour again. The UNESCO World Heritage site welcomes over one million visitors from around the world each year.',
    color: 'bg-amber-600',
  },
  {
    cat_de: 'Gesundheit', cat_en: 'Health', date: '11. Jun 2025',
    title_de: 'Uniklinik RWTH Aachen eröffnet neues KI-Diagnose-Zentrum',
    title_en: 'RWTH University Hospital Opens New AI Diagnostics Centre',
    summary_de: 'Das neue Zentrum für KI-gestützte Diagnostik soll die Früherkennung von Krebserkrankungen um bis zu 30% verbessern. Investition: 25 Millionen Euro.',
    summary_en: 'The new centre for AI-assisted diagnostics aims to improve early cancer detection by up to 30%. Investment: 25 million euros.',
    color: 'bg-red-600',
  },
  {
    cat_de: 'Verkehr', cat_en: 'Transport', date: '9. Jun 2025',
    title_de: 'E-Busse für ASEAG: 40 neue Fahrzeuge ab Herbst',
    title_en: 'E-Buses for ASEAG: 40 New Vehicles from Autumn',
    summary_de: 'Die ASEAG erweitert ihre Elektroflotte um 40 neue E-Busse. Ab Oktober verkehren auf den meistgenutzten Linien ausschließlich emissionsfreie Fahrzeuge.',
    summary_en: 'ASEAG is expanding its electric fleet by 40 new e-buses. From October, only emission-free vehicles will run on the most used routes.',
    color: 'bg-teal-600',
  },
]

const catColorMap = {
  Stadtentwicklung: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Urban Development': 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Bildung: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Education: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Nachhaltigkeit: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Sustainability: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Tourismus: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Tourism: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Gesundheit: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Health: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Verkehr: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  Transport: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
}

export default function News() {
  const { lang, tr } = useLang()
  const t = tr.news
  const [active, setActive] = useState(t.all)
  const [query, setQuery] = useState('')

  const allCat = t.all
  const categories = [allCat, ...Array.from(new Set(articles.map(a => lang === 'en' ? a.cat_en : a.cat_de)))]

  const filtered = articles.filter(a => {
    const cat = lang === 'en' ? a.cat_en : a.cat_de
    const title = lang === 'en' ? a.title_en : a.title_de
    const summary = lang === 'en' ? a.summary_en : a.summary_de
    const matchCat = active === allCat || cat === active
    const q = query.toLowerCase()
    const matchSearch = !q || title.toLowerCase().includes(q) || summary.toLowerCase().includes(q)
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
                {articles.filter(a => (lang === 'en' ? a.cat_en : a.cat_de) === cat).length}
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
          {filtered.map(a => {
            const cat = lang === 'en' ? a.cat_en : a.cat_de
            const title = lang === 'en' ? a.title_en : a.title_de
            const summary = lang === 'en' ? a.summary_en : a.summary_de
            return (
              <div key={a.title_de} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                <div className={`${a.color} h-2 w-full`} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColorMap[cat] || 'bg-gray-100 text-gray-600'}`}>{cat}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"><Clock size={11} />{a.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#003D73] dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{summary}</p>
                  <span className="flex items-center gap-1 text-[#003D73] dark:text-blue-400 font-semibold text-sm">{t.readMore} <ChevronRight size={14} /></span>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
