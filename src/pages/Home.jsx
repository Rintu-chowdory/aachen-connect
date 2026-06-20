import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, Bell, Calendar, Newspaper, Wrench, ChevronRight,
  Flame, GraduationCap, Building2, Droplets, Bus, Trash2,
  TreePine, Heart, BadgeAlert, MapPin
} from 'lucide-react'

const stats = [
  { value: '260.000+', label: 'Einwohner' },
  { value: '2', label: 'Universitäten' },
  { value: '1', label: 'UNESCO-Welterbe' },
  { value: '3', label: 'Thermalquellen' },
]

const alerts = [
  { type: 'info', text: 'Baustelle Elisenbrunnen bis 30. Juni – Umleitung beachten' },
  { type: 'warn', text: 'Unwetterwarnung: Starkregen am Samstag erwartet' },
  { type: 'ok', text: 'Schwimmbad Aquana wieder geöffnet' },
]

const quickServices = [
  { icon: <Building2 size={22} />, label: 'Bürgerbüro', desc: 'Ausweis, Meldung, Ummeldung' },
  { icon: <Flame size={22} />, label: 'STAWAG', desc: 'Strom, Gas, Wasser' },
  { icon: <Bus size={22} />, label: 'ASEAG', desc: 'Bus & Bahnen im Stadtgebiet' },
  { icon: <Trash2 size={22} />, label: 'AWA', desc: 'Abfallentsorgung & Recycling' },
  { icon: <Droplets size={22} />, label: 'Carolus Thermen', desc: 'Thermalquellen & Wellness' },
  { icon: <GraduationCap size={22} />, label: 'RWTH Aachen', desc: 'Technische Hochschule' },
  { icon: <TreePine size={22} />, label: 'Grünflächen', desc: 'Parks & Stadtwald' },
  { icon: <Heart size={22} />, label: 'Gesundheit', desc: 'Uniklinik & Sozialamt' },
]

const upcomingEvents = [
  { date: '28. Jun', title: 'Aachener Weihnachtsmarkt', location: 'Marktplatz', cat: 'Markt' },
  { date: '5. Jul', title: 'Reitturnier CHIO Aachen', location: 'Soers', cat: 'Sport' },
  { date: '12. Jul', title: 'Stadtführung Dom & Rathaus', location: 'Katschhof', cat: 'Kultur' },
  { date: '19. Jul', title: 'Open-Air Kino Lousberg', location: 'Lousberg', cat: 'Film' },
]

export default function Home() {
  const [query, setQuery] = useState('')

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[520px] flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001f3f 0%, #003D73 50%, #1a5a9a 100%)' }}
      >
        <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute bottom-[-60px] left-[-40px] w-80 h-80 rounded-full bg-[#C8A951]/10" />
        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={16} className="text-[#C8A951]" />
            <span className="text-[#C8A951] font-medium text-sm tracking-widest uppercase">Nordrhein-Westfalen · Deutschland</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
            Willkommen in<br/>
            <span className="text-[#C8A951]">Aachen</span>
          </h1>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Wo Kaisergeschichte auf modernste Forschung trifft — mitten im Herzen Europas
          </p>
          <div className="flex gap-2 max-w-xl mx-auto">
            <div className="flex-1 flex items-center bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 gap-2">
              <Search size={18} className="text-blue-200 shrink-0" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Services, Veranstaltungen, Behörden suchen …"
                className="flex-1 bg-transparent py-3 text-white placeholder-blue-300 outline-none text-sm"
              />
            </div>
            <button className="bg-[#C8A951] hover:bg-yellow-400 text-[#003D73] font-semibold px-6 py-3 rounded-xl transition-colors text-sm shrink-0">
              Suchen
            </button>
          </div>
        </div>
        <div className="relative mt-14 w-full max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map(s => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#C8A951]">{s.value}</div>
                <div className="text-xs text-blue-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-10" />
      </section>

      {/* Alerts */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <BadgeAlert size={20} className="text-[#003D73] dark:text-blue-400" />
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Aktuelle Hinweise</h2>
        </div>
        <div className="flex flex-col gap-2">
          {alerts.map((a, i) => (
            <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
              a.type === 'warn' ? 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700'
              : a.type === 'ok' ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700'
              : 'bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700'
            }`}>
              <span className="mt-0.5">
                {a.type === 'warn' ? '⚠️' : a.type === 'ok' ? '✅' : 'ℹ️'}
              </span>
              {a.text}
            </div>
          ))}
        </div>
      </section>

      {/* Live Updates */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Live Updates</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-6">Aktuelle Informationen auf einen Blick</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Bell size={22} />, color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400', count: '3', label: 'AKTIVE MELDUNGEN' },
            { icon: <Calendar size={22} />, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400', count: '12', label: 'VERANSTALTUNGEN' },
            { icon: <Newspaper size={22} />, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400', count: '8', label: 'NACHRICHTEN' },
            { icon: <Wrench size={22} />, color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400', count: '24', label: 'SERVICEANFRAGEN' },
          ].map(c => (
            <div key={c.label} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mx-auto mb-3`}>{c.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{c.count}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-[#E8F0F9] dark:bg-gray-800 py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Stadtservices</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Direktzugang zu Behörden & Einrichtungen</p>
            </div>
            <Link to="/services" className="flex items-center gap-1 text-[#003D73] dark:text-blue-400 font-semibold text-sm hover:underline">
              Alle anzeigen <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickServices.map(s => (
              <div key={s.label} className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md hover:border-[#003D73]/30 transition-all cursor-pointer group">
                <div className="w-11 h-11 rounded-xl bg-[#003D73]/10 dark:bg-blue-900/40 text-[#003D73] dark:text-blue-300 flex items-center justify-center mb-3 group-hover:bg-[#003D73] group-hover:text-white transition-colors">{s.icon}</div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{s.label}</div>
                <div className="text-xs text-gray-400 dark:text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Veranstaltungen</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Was ist los in Aachen?</p>
          </div>
          <Link to="/events" className="flex items-center gap-1 text-[#003D73] dark:text-blue-400 font-semibold text-sm hover:underline">
            Alle Termine <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingEvents.map(e => (
            <div key={e.title} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-[#003D73] text-white text-center py-3">
                <div className="text-[#C8A951] font-bold text-lg">{e.date.split(' ')[0]}</div>
                <div className="text-blue-200 text-xs">{e.date.split(' ')[1]}</div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-[#003D73] dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded-full">{e.cat}</span>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mt-2 mb-1">{e.title}</div>
                <div className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={11} />{e.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
