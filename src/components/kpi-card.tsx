import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface KpiCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  description?: string
  className?: string
}

export function KpiCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  description,
  className 
}: KpiCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-success"
      case "negative":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card className={cn("bg-card border-border shadow-control hover:shadow-elevation transition-all duration-300", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground/80">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-card-foreground mb-1">
          {value}
        </div>
        {change && (
          <p className={cn("text-xs", getChangeColor())}>
            {change}
          </p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}