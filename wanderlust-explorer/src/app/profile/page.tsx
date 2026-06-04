"use client"

import { useEffect, useState } from "react"

export default function ProfilePage() {
  const [favoritesCount, setFavoritesCount] =
    useState(0)

  useEffect(() => {
    const saved =
      localStorage.getItem("favoriteIds")

    const favorites =
      saved
        ? JSON.parse(saved)
        : []

    setFavoritesCount(
      favorites.length
    )
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 p-10">

      <section className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl p-10 border">

          <div className="flex flex-col items-center">

            <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-4xl mb-6">
              I
            </div>

            <h1 className="text-4xl font-bold mb-2">
              Itziar Dondiz
            </h1>

            <p className="text-gray-600 mb-8">
              Travel Explorer
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="border rounded-xl p-6">

              <h2 className="font-semibold mb-2">
                Favorites
              </h2>

              <p className="text-5xl font-bold">
                {favoritesCount}
              </p>

              <p className="text-gray-600">
                Saved experiences
              </p>

            </div>

            <div className="border rounded-xl p-6">

              <h2 className="font-semibold mb-2">
                Destinations
              </h2>

              <p className="text-gray-600">
                Explore new places
              </p>

            </div>

            <div className="border rounded-xl p-6">

              <h2 className="font-semibold mb-2">
                Profile
              </h2>

              <p className="text-gray-600">
                Personal information
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
