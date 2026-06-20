import { Building2, Flame, Bus, Trash2, Droplets, GraduationCap, Heart, TreePine, Scale, Baby, Car, Library, Globe, Landmark, Stethoscope, FileText } from 'lucide-react'

const cats = [
  {
    title: 'Bürgerservices',
    color: 'bg-blue-50',
    icon_color: 'bg-[#003D73]/10 text-[#003D73]',
    items: [
      { icon: <Building2 size={20} />, name: 'Bürgerbüro', desc: 'Personalausweis, Reisepass, An-/Ummeldung' },
      { icon: <FileText size={20} />, name: 'Standesamt', desc: 'Geburten, Heirat, Sterbefälle' },
      { icon: <Scale size={20} />, name: 'Ordnungsamt', desc: 'Parken, Lärm, öffentliche Ordnung' },
      { icon: <Car size={20} />, name: 'Kfz-Zulassung', desc: 'Fahrzeuge anmelden & ummelden' },
    ]
  },
  {
    title: 'Versorgung & Infrastruktur',
    color: 'bg-amber-50',
    icon_color: 'bg-amber-100 text-amber-700',
    items: [
      { icon: <Flame size={20} />, name: 'STAWAG', desc: 'Strom, Gas & Wärme für Aachen' },
      { icon: <Bus size={20} />, name: 'ASEAG', desc: 'Bus & Bahn im Stadtgebiet' },
      { icon: <Trash2 size={20} />, name: 'AWA', desc: 'Müllabholung & Wertstoffhöfe' },
      { icon: <Droplets size={20} />, name: 'Wasserwerk', desc: 'Trinkwasserversorgung der Stadt' },
    ]
  },
  {
    title: 'Bildung & Soziales',
    color: 'bg-green-50',
    icon_color: 'bg-green-100 text-green-700',
    items: [
      { icon: <GraduationCap size={20} />, name: 'RWTH Aachen', desc: 'Technische Universität Aachen' },
      { icon: <Library size={20} />, name: 'Stadtbibliothek', desc: 'Bücher, Medien & digitale Angebote' },
      { icon: <Baby size={20} />, name: 'Kitas & Schulen', desc: 'Betreuungsplätze & Schulanmeldungen' },
      { icon: <Heart size={20} />, name: 'Sozialamt', desc: 'Beratung, Grundsicherung & Hilfen' },
    ]
  },
  {
    title: 'Gesundheit & Freizeit',
    color: 'bg-purple-50',
    icon_color: 'bg-purple-100 text-purple-700',
    items: [
      { icon: <Stethoscope size={20} />, name: 'Uniklinik RWTH', desc: 'Größtes Krankenhaus der Region' },
      { icon: <Droplets size={20} />, name: 'Carolus Thermen', desc: 'Thermalquellen & Wellness' },
      { icon: <TreePine size={20} />, name: 'Grünflächen', desc: 'Stadtwald, Parks & Lousberg' },
      { icon: <Landmark size={20} />, name: 'Tourismus', desc: 'Dom, Rathaus & Elisenbrunnen' },
    ]
  },
]

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stadtservices Aachen</h1>
        <p className="text-gray-500">Alle wichtigen Behörden und Einrichtungen im Überblick</p>
      </div>
      <div className="flex flex-col gap-8">
        {cats.map(cat => (
          <div key={cat.title}>
            <h2 className="text-lg font-bold text-gray-800 mb-4">{cat.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map(item => (
                <div key={item.name} className={`${cat.color} rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow border border-transparent hover:border-gray-200`}>
                  <div className={`w-11 h-11 rounded-xl ${cat.icon_color} flex items-center justify-center mb-3`}>{item.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}