"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface ResourceCardProps {
  instructionalStage: "도입" | "개념설명" | "연습" | "정리" | "평가"
  usageContext: "수업중활용" | "과제용" | "보충학습"
  title: string
  unit: string
  activityType: "개념" | "문제" | "활동"
  estimatedTime: number
  difficulty: "하" | "중" | "상"
  onClick?: () => void
}

const instructionalStageLabel = {
  도입: "도입",
  개념설명: "개념 설명",
  연습: "연습",
  정리: "정리",
  평가: "평가",
}

const usageContextLabel = {
  수업중활용: "수업 중 활용",
  과제용: "과제용",
  보충학습: "보충 학습",
}

const difficultyColor = {
  하: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100",
  중: "bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100",
  상: "bg-rose-100 text-rose-900 dark:bg-rose-900 dark:text-rose-100",
}

const difficultyKorean = {
  하: "하",
  중: "중",
  상: "상",
}

export function ResourceCard({
  instructionalStage,
  usageContext,
  title,
  unit,
  activityType,
  estimatedTime,
  difficulty,
  onClick,
}: ResourceCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-background"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider border-0">
          {instructionalStageLabel[instructionalStage]}
        </Badge>
        <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-wider border-0">
          {usageContextLabel[usageContext]}
        </Badge>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-3 leading-tight">{title}</h3>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{unit}</span>
        <span className="text-border">•</span>
        <span>{activityType}</span>
        <span className="text-border">•</span>
        <span>{estimatedTime}분</span>
        <span className="text-border">•</span>
        <Badge variant="outline" className={cn("text-xs font-semibold border-0", difficultyColor[difficulty])}>
          난이도 {difficultyKorean[difficulty]}
        </Badge>
      </div>
    </button>
  )
}
