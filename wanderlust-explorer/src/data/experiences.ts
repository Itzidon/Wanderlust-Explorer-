import { Experience } from "@/types/experience"

const categories = ["Adventure", "Culture", "Food", "Wellness", "Nature"]

const destinations = [
  "Nairobi, Kenya",
  "Tokyo, Japan",
  "Bali, Indonesia",
  "Reykjavik, Iceland",
  "Tuscany, Italy",
  "Bangkok, Thailand",
  "Cusco, Peru",
  "Marrakech, Morocco",
  "Dubrovnik, Croatia",
  "Zermatt, Switzerland",
]

const titles = [
  "Safari Adventure",
  "Tokyo Food Tour",
  "Yoga Retreat",
  "Northern Lights Tour",
  "Wine Experience",
  "Mountain Hiking",
  "Street Food Walk",
  "Ancient City Tour",
  "Desert Escape",
  "Sailing Trip",
]

export const experiences: Experience[] = Array.from(
  { length: 100 },
  (_, index) => {
    const id = index + 1
    const category = categories[index % categories.length]
    const destination = destinations[index % destinations.length]
    const title = `${titles[index % titles.length]} ${id}`

    return {
      id,
      title,
      description: `Enjoy a unique experience in ${destination}.`,
      category,
      destination,
      price: 150 + index * 25,
      rating: Number((4 + (index % 10) * 0.1).toFixed(1)),
      imageUrl: `https://picsum.photos/400/300?random=${id}`,
    }
  }
)
