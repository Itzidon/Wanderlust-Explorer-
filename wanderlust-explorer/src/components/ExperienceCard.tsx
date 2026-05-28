import Link from "next/link"
import { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
}

export default function ExperienceCard({
  experience,
  isFavorite = false,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <Link href={`/experiences/${experience.id}`}>
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{experience.title}</h2>

          <p className="text-gray-600 mb-3">{experience.description}</p>

          <div className="flex justify-between text-sm">
            <span>{experience.destination}</span>
            <span>⭐ {experience.rating}</span>
          </div>

          <p className="mt-3 font-bold">${experience.price}</p>
        </div>
      </Link>

      {onToggleFavorite && (
        <button
          onClick={() => onToggleFavorite(experience.id)}
          className="w-full bg-black text-white py-3 hover:bg-gray-800 transition"
        >
          {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
      )}
    </article>
  )
}