import React from "react"
import { Feather, Star, Compass, Flower2, ArrowUpRight } from "lucide-react"

export default function Categories() {
  return (
    <section className="container mx-auto px-8 md:px-24 py-6 md:py-8 dark:bg-stone-900 min-w-screen">
      <div className="mb-12">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          <span className="text-xs font-medium text-purple-600 dark:text-purple-300">Discover</span>
        </div>
        <p className="font-[Amatic_SC] text-4xl md:text-4xl font-medium tracking-tight dark:text-white text-gray-900 mb-3">
          Explorations
        </p>
        <p className="font-[Indie_Flower] text-gray-500 dark:text-gray-400 max-w-md">
          Discover new perspectives and expand your understanding of the universe.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {categories.map((category, index) => (
          <a href="#" key={index} className="group relative isolate">
            <div className="relative overflow-hidden rounded-2xl group-hover:scale-110 transition duration-300 ease-in-out">
                <img src={category.image} alt={category.title} className="w-full h-52 object-cover rounded-lg shadow-md group-hover:scale-200 transition duration-500" />
                <span className="text-[20px] absolute text-white font-[Amatic_SC] top-1/3 left-1/2 -translate-x-1/2">{category.title}</span>
                <span className="absolute text-[10px] text-white font-[Amatic_SC] top-3/5 left-1/2 -translate-x-1/2">{category.description}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

const categories = [
  {
    title: "Philosophy & Wisdom",
    description: "Rituals and habits for everyday life",
    image: "/blog-placeholder-2.jpg",
    icon: <Feather className="h-4 w-4" />,
  },
  {
    title: "Spiritual Teachings",
    description: "Insights from ancient and modern teachings",
    image: "/blog-placeholder-3.jpg",
    icon: <Star className="h-4 w-4" />,
  },
  {
    title: "Extraterrestial Life",
    description: "Explorations of spiritual places and paths",
    image: "/blog-placeholder-4.jpg",
    icon: <Compass className="h-4 w-4" />,
  },
  {
    title: "Psychedelics & Nature",
    description: "Finding connection through nature",
    image: "/blog-placeholder-5.jpg",
    icon: <Flower2 className="h-4 w-4" />,
  },
]
