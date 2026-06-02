"use client"

import { useEffect, useState } from "react"

import ExperienceCard from "@/components/ExperienceCard"
import { experiences } from "@/data/experiences"

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  useEffect(() => {
    const savedFavorites =
      localStorage.getItem("favoriteIds")

    setFavoriteIds(
      savedFavorites
        ? JSON.parse(savedFavorites)
        : []
    )
  }, [])

  function toggleFavorite(id: number) {
    setFavoriteIds((currentFavorites) => {
      const updatedFavorites =
        currentFavorites.filter(
          (favoriteId) =>
            favoriteId !== id
        )

      localStorage.setItem(
        "favoriteIds",
        JSON.stringify(updatedFavorites)
      )

      return updatedFavorites
    })
  }

  const favoriteExperiences =
    experiences.filter(
      (experience) =>
        favoriteIds.includes(
          experience.id
        )
    )

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <section className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Favorite Experiences
        </h1>

        {favoriteExperiences.length === 0 ? (

          <div className="bg-white border rounded-2xl p-10 text-center">

            <p className="text-gray-600 text-lg">
              No favorite experiences yet ❤️
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {favoriteExperiences.map(
              (experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  isFavorite={true}
                  onToggleFavorite={
                    toggleFavorite
                  }
                />
              )
            )}

          </div>

        )}

      </section>
    </main>
  )
}
