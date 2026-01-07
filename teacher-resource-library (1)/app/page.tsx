"use client"

import { useState } from "react"
import { FilterPanel, type FilterOptions } from "@/components/filter-panel"
import { ResourceList } from "@/components/resource-list"
import type { ResourceCardProps } from "@/components/resource-card"
import { Grid3x3, List } from "lucide-react"

const SAMPLE_RESOURCES: ResourceCardProps[] = [
  {
    instructionalStage: "도입",
    usageContext: "수업중활용",
    title: "문자의 의미와 역할 소개",
    unit: "1단원. 문자와 식",
    activityType: "개념",
    estimatedTime: 15,
    difficulty: "하",
  },
  {
    instructionalStage: "개념설명",
    usageContext: "수업중활용",
    title: "일차방정식의 개념 이해하기",
    unit: "2단원. 일차방정식",
    activityType: "개념",
    estimatedTime: 20,
    difficulty: "중",
  },
  {
    instructionalStage: "연습",
    usageContext: "수업중활용",
    title: "일차방정식 풀이 연습",
    unit: "2단원. 일차방정식",
    activityType: "문제",
    estimatedTime: 25,
    difficulty: "중",
  },
  {
    instructionalStage: "평가",
    usageContext: "과제용",
    title: "일차방정식 단원 평가",
    unit: "2단원. 일차방정식",
    activityType: "활동",
    estimatedTime: 40,
    difficulty: "중",
  },
  {
    instructionalStage: "도입",
    usageContext: "보충학습",
    title: "빠른 계산 드릴",
    unit: "1단원. 문자와 식",
    activityType: "활동",
    estimatedTime: 5,
    difficulty: "하",
  },
  {
    instructionalStage: "개념설명",
    usageContext: "수업중활용",
    title: "다항식의 계산 원리",
    unit: "3단원. 다항식",
    activityType: "개념",
    estimatedTime: 25,
    difficulty: "중",
  },
  {
    instructionalStage: "연습",
    usageContext: "과제용",
    title: "다항식 곱셈 문제집",
    unit: "3단원. 다항식",
    activityType: "문제",
    estimatedTime: 35,
    difficulty: "상",
  },
  {
    instructionalStage: "정리",
    usageContext: "수업중활용",
    title: "단원 정리 및 복습",
    unit: "3단원. 다항식",
    activityType: "활동",
    estimatedTime: 20,
    difficulty: "중",
  },
]

const UNITS = ["1단원. 문자와 식", "2단원. 일차방정식", "3단원. 다항식"]

export default function Page() {
  const [filters, setFilters] = useState<FilterOptions>({
    instructionalStage: [],
    usageContext: [],
    unit: [],
    difficulty: [],
  })

  const [layout, setLayout] = useState<"grid" | "list">("grid")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-card z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-foreground">수업 자료실</h1>
          <p className="text-sm text-muted-foreground mt-1">총 {SAMPLE_RESOURCES.length}개의 수업 자료</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <FilterPanel onFilterChange={setFilters} units={UNITS} />
          </aside>

          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">자료 보기</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setLayout("grid")}
                  className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                    layout === "grid" ? "bg-[#1A59E1] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                  카드형
                </button>
                <button
                  onClick={() => setLayout("list")}
                  className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                    layout === "list" ? "bg-[#1A59E1] text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <List className="w-4 h-4" />
                  리스트형
                </button>
              </div>
            </div>
            <ResourceList
              resources={SAMPLE_RESOURCES}
              filters={filters}
              layout={layout}
              onResourceSelect={(resource) => {
                console.log("선택한 자료:", resource)
              }}
            />
          </section>
        </div>
      </main>
    </div>
  )
}
