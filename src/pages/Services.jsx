import { Building2, Flame, Bus, Trash2, Droplets, GraduationCap, Heart, TreePine, Scale, Baby, Car, Library, Landmark, Stethoscope, FileText } from 'lucide-react'
import { useLang } from '../context/LangContext.jsx'

const icons = [
  [<Building2 size={20} />, <FileText size={20} />, <Scale size={20} />, <Car size={20} />],
  [<Flame size={20} />, <Bus size={20} />, <Trash2 size={20} />, <Droplets size={20} />],
  [<GraduationCap size={20} />, <Library size={20} />, <Baby size={20} />, <Heart size={20} />],
  [<Stethoscope size={20} />, <Droplets size={20} />, <TreePine size={20} />, <Landmark size={20} />],
]

const catStyles = [
  { color: 'bg-blue-50 dark:bg-blue-900/20', icon_color: 'bg-[#003D73]/10 text-[#003D73] dark:bg-blue-900/40 dark:text-blue-300' },
  { color: 'bg-amber-50 dark:bg-amber-900/20', icon_color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
  { color: 'bg-green-50 dark:bg-green-900/20', icon_color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
  { color: 'bg-purple-50 dark:bg-purple-900/20', icon_color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
]

export default function Services() {
  const { tr } = useLang()
  const t = tr.services

  // items are flat [name, desc] pairs, 4 per category
  const categorized = [0, 1, 2, 3].map(ci => ({
    title: t.categories[ci],
    style: catStyles[ci],
    items: t.items.slice(ci * 4, ci * 4 + 4).map((item, ii) => ({
      icon: icons[ci][ii],
      name: item[0],
      desc: item[1],
    }))
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t.subtitle}</p>
      </div>
      <div className="flex flex-col gap-8">
        {categorized.map(cat => (
          <div key={cat.title}>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">{cat.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map(item => (
                <div key={item.name} className={`${cat.style.color} rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow border border-transparent hover:border-gray-200 dark:hover:border-gray-600`}>
                  <div className={`w-11 h-11 rounded-xl ${cat.style.icon_color} flex items-center justify-center mb-3`}>{item.icon}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
