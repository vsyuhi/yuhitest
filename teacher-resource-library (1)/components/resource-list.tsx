"use client"

import { useMemo } from "react"
import { ResourceCard, type ResourceCardProps } from "./resource-card"
import type { FilterOptions } from "./filter-panel"

interface ResourceListProps {
  resources: ResourceCardProps[]
  filters: FilterOptions
  layout?: "grid" | "list"
  onResourceSelect?: (resource: ResourceCardProps) => void
}

export function ResourceList({ resources, filters, layout = "grid", onResourceSelect }: ResourceListProps) {
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      if (filters.instructionalStage.length > 0 && !filters.instructionalStage.includes(resource.instructionalStage)) {
        return false
      }

      if (filters.usageContext.length > 0 && !filters.usageContext.includes(resource.usageContext)) {
        return false
      }

      if (filters.unit.length > 0 && !filters.unit.includes(resource.unit)) {
        return false
      }

      if (filters.difficulty.length > 0 && !filters.difficulty.includes(resource.difficulty)) {
        return false
      }

      return true
    })
  }, [resources, filters])

  return (
    <div className={layout === "grid" ? "grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "space-y-3"}>
      {filteredResources.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">일치하는 자료가 없습니다.</p>
        </div>
      ) : (
        filteredResources.map((resource, idx) => (
          <ResourceCard key={`${resource.title}-${idx}`} {...resource} onClick={() => onResourceSelect?.(resource)} />
        ))
      )}
    </div>
  )
}
