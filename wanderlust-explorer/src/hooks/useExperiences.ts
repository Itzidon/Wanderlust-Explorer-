import { useMemo } from "react"

import { experiences } from "@/data/experiences"

export function useExperiences(
  search: string,
  category: string,
  destination: string
) {
  return useMemo(() => {
    return experiences.filter((experience) => {

      const matchesSearch =
        new RegExp(search, "i")
          .test(experience.title)

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
  }, [
    search,
    category,
    destination,
  ])
}
