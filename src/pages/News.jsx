import { Clock, ChevronRight } from 'lucide-react'

const articles = [
  {
    cat: 'Stadtentwicklung', date: '19. Jun 2025',
    title: 'Neues Fahrradwegenetz: 15 km neue Radwege bis 2026',
    summary: 'Die Stadt Aachen investiert 8 Millionen Euro in den Ausbau des Radwegenetzes. Bis Ende 2026 entstehen 15 Kilometer neue Radinfrastruktur entlang der Hauptverkehrsachsen.',
    color: 'bg-blue-600',
  },
  {
    cat: 'Bildung', date: '17. Jun 2025',
    title: 'RWTH Aachen unter Top 10 europäischer Ingenieurshochschulen',
    summary: 'Im aktuellen QS-Ranking belegt die RWTH Aachen erneut einen Spitzenplatz unter den besten Ingenieurshochschulen Europas. Über 45.000 Studierende aus 120 Nationen sind eingeschrieben.',
    color: 'bg-purple-600',
  },
  {
    cat: 'Nachhaltigkeit', date: '15. Jun 2025',
    title: 'Aachen wird bis 2030 klimaneutral: Masterplan vorgestellt',
    summary: 'Der Stadtrat hat den Klimamasterplan verabschiedet. Kernelement: 100% erneuerbare Energie bei STAWAG und Förderung von 10.000 Photovoltaikanlagen auf privaten Dächern.',
    color: 'bg-green-600',
  },
  {
    cat: 'Tourismus', date: '13. Jun 2025',
    title: 'Aachener Dom: Restaurierungsarbeiten abgeschlossen',
    summary: 'Nach dreijähriger Restaurierung erstrahlt der Aachener Dom wieder in vollem Glanz. Das UNESCO-Welterbe empfängt jährlich über eine Million Besucher aus aller Welt.',
    color: 'bg-amber-600',
  },
  {
    cat: 'Gesundheit', date: '11. Jun 2025',
    title: 'Uniklinik RWTH Aachen eröffnet neues KI-Diagnose-Zentrum',
    summary: 'Das neue Zentrum für KI-gestützte Diagnostik soll die Früherkennung von Krebserkrankungen um bis zu 30% verbessern. Investition: 25 Millionen Euro.',
    color: 'bg-red-600',
  },
  {
    cat: 'Verkehr', date: '9. Jun 2025',
    title: 'E-Busse für ASEAG: 40 neue Fahrzeuge ab Herbst',
    summary: 'Die ASEAG erweitert ihre Elektroflotte um 40 neue E-Busse. Ab Oktober verkehren auf den meistgenutzten Linien ausschließlich emissionsfreie Fahrzeuge.',
    color: 'bg-teal-600',
  },
]

const catColors = {
  Stadtentwicklung: 'bg-blue-100 text-blue-700',
  Bildung: 'bg-purple-100 text-purple-700',
  Nachhaltigkeit: 'bg-green-100 text-green-700',
  Tourismus: 'bg-amber-100 text-amber-700',
  Gesundheit: 'bg-red-100 text-red-700',
  Verkehr: 'bg-teal-100 text-teal-700',
}

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Aachen Nachrichten</h1>
        <p className="text-gray-500">Aktuelle Meldungen aus der Kaiserstadt</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map(a => (
          <div key={a.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
            <div className={`${a.color} h-2 w-full`} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColors[a.cat] || 'bg-gray-100 text-gray-600'}`}>{a.cat}</span>
                <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={11} />{a.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#003D73] transition-colors">{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.summary}</p>
              <span className="flex items-center gap-1 text-[#003D73] font-semibold text-sm">Weiterlesen <ChevronRight size={14} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}