"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import ExperienceCard from "@/components/ExperienceCard"
import FilterBar from "@/components/FilterBar"
import SearchBar from "@/components/SearchBar"
import { experiences } from "@/data/experiences"

export default function ExperiencesPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  )

  const [category, setCategory] = useState(
    searchParams.get("category") || ""
  )

  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  )

  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    if (typeof window === "undefined") return []

    const savedFavorites =
      localStorage.getItem("favoriteIds")

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : []
  })

  function toggleFavorite(id: number) {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter(
            (favoriteId) => favoriteId !== id
          )
        : [...currentFavorites, id]
    )
  }

  useEffect(() => {
    localStorage.setItem(
      "favoriteIds",
      JSON.stringify(favoriteIds)
    )
  }, [favoriteIds])

  useEffect(() => {
    const params = new URLSearchParams()

    if (search) {
      params.set("search", search)
    }

    if (category) {
      params.set("category", category)
    }

    if (destination) {
      params.set("destination", destination)
    }

    const query = params.toString()

    router.push(
      query
        ? `${pathname}?${query}`
        : pathname
    )
  }, [
    search,
    category,
    destination,
    pathname,
    router,
  ])

  const filteredExperiences =
    experiences.filter((experience) => {
      const matchesSearch =
        new RegExp(search, "i").test(
          experience.title
        )

      const matchesCategory =
        category === "" ||
        experience.category === category

      const matchesDestination =
        destination === "" ||
        experience.destination === destination

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination
      )
    })

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <section className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
            Explore
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Find your next experience
          </h1>

          <p className="text-gray-600">
            Search, filter and discover unique experiences
          </p>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          category={category}
          setCategory={setCategory}
          destination={destination}
          setDestination={setDestination}
        />

        <p className="mb-6">
          {filteredExperiences.length}
          {" "}experiences found
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredExperiences.map(
            (experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={
                  favoriteIds.includes(
                    experience.id
                  )
                }
                onToggleFavorite={
                  toggleFavorite
                }
              />
            )
          )}

        </div>

      </section>
    </main>
  )
}
