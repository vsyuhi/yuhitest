"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export interface FilterOptions {
  instructionalStage: string[]
  usageContext: string[]
  unit: string[]
  difficulty: string[]
}

export interface FilterPanelProps {
  onFilterChange: (filters: FilterOptions) => void
  units: string[]
}

const instructionalStages = [
  { value: "도입", label: "도입" },
  { value: "개념설명", label: "개념 설명" },
  { value: "연습", label: "연습" },
  { value: "정리", label: "정리" },
  { value: "평가", label: "평가" },
]

const usageContexts = [
  { value: "수업중활용", label: "수업 중 활용" },
  { value: "과제용", label: "과제용" },
  { value: "보충학습", label: "보충 학습" },
]

const difficulties = [
  { value: "하", label: "하" },
  { value: "중", label: "중" },
  { value: "상", label: "상" },
]

export function FilterPanel({ onFilterChange, units }: FilterPanelProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    instructionalStage: [],
    usageContext: [],
    unit: [],
    difficulty: [],
  })

  const handleMultiSelect = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => {
      const current = prev[key]
      const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      const newFilters = { ...prev, [key]: updated }
      onFilterChange(newFilters)
      return newFilters
    })
  }

  const hasActiveFilters = Object.values(filters).some((value) => Array.isArray(value) && value.length > 0)

  const resetFilters = () => {
    const defaultFilters: FilterOptions = {
      instructionalStage: [],
      usageContext: [],
      unit: [],
      difficulty: [],
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <div className="space-y-6 p-4 bg-card border border-border rounded-lg sticky top-[73px]">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide">필터</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-6 px-2 text-xs">
            <X className="w-3 h-3 mr-1" />
            초기화
          </Button>
        )}
      </div>

      <div className="space-y-8">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">수업 단계</label>
        <div className="space-y-2">
          {instructionalStages.map((stage) => (
            <label key={stage.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.instructionalStage.includes(stage.value)}
                onChange={() => handleMultiSelect("instructionalStage", stage.value)}
                className="w-4 h-4 rounded border border-border bg-background checked:bg-[#1A59E1] checked:border-[#1A59E1] cursor-pointer"
              />
              <span className="text-sm">{stage.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">사용 맥락</label>
        <div className="space-y-2">
          {usageContexts.map((context) => (
            <label key={context.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.usageContext.includes(context.value)}
                onChange={() => handleMultiSelect("usageContext", context.value)}
                className="w-4 h-4 rounded border border-border bg-background checked:bg-[#1A59E1] checked:border-[#1A59E1] cursor-pointer"
              />
              <span className="text-sm">{context.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">단원</label>
        <div className="space-y-2">
          {units.map((unit) => (
            <label key={unit} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.unit.includes(unit)}
                onChange={() => handleMultiSelect("unit", unit)}
                className="w-4 h-4 rounded border border-border bg-background checked:bg-[#1A59E1] checked:border-[#1A59E1] cursor-pointer"
              />
              <span className="text-sm">{unit}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">난이도</label>
        <div className="space-y-2">
          {difficulties.map((diff) => (
            <label key={diff.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.difficulty.includes(diff.value)}
                onChange={() => handleMultiSelect("difficulty", diff.value)}
                className="w-4 h-4 rounded border border-border bg-background checked:bg-[#1A59E1] checked:border-[#1A59E1] cursor-pointer"
              />
              <span className="text-sm">{diff.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
