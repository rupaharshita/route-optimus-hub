import { 
  Activity, 
  Truck, 
  Fuel, 
  Route, 
  AlertTriangle,
  TrendingUp,
  MapPin,
  Clock,
  Users,
  CheckCircle2
} from "lucide-react"
import { KpiCard } from "./kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import fleetHeroImage from "@/assets/fleet-control-hero.jpg"

export function DashboardOverview() {
  const kpiData = [
    {
      title: "Fleet Utilization",
      value: "87.3%",
      change: "+2.1% from last week",
      changeType: "positive" as const,
      icon: Activity,
      description: "Active vehicles in operation"
    },
    {
      title: "Active Deliveries",
      value: "142",
      change: "+18 from yesterday",
      changeType: "positive" as const,
      icon: Truck,
      description: "Currently in transit"
    },
    {
      title: "Fuel Savings",
      value: "₹8.2L",
      change: "+8.2% this month",
      changeType: "positive" as const,
      icon: Fuel,
      description: "Optimization savings"
    },
    {
      title: "Route Efficiency",
      value: "94.8%",
      change: "+1.3% improved",
      changeType: "positive" as const,
      icon: Route,
      description: "Average route completion"
    },
    {
      title: "Maintenance Alerts",
      value: "7",
      change: "3 critical",
      changeType: "negative" as const,
      icon: AlertTriangle,
      description: "Requires attention"
    }
  ]

  const fleetHealth = [
    { status: "Available", count: 87, color: "bg-success", percentage: 72 },
    { status: "In Transit", count: 28, color: "bg-primary", percentage: 23 },
    { status: "Maintenance", count: 6, color: "bg-warning", percentage: 5 }
  ]

  const recentActivities = [
    { 
      id: 1, 
      type: "delivery", 
      message: "Vehicle MH-12-AB-1234 completed delivery to Mumbai", 
      time: "2 min ago",
      icon: CheckCircle2,
      color: "text-success"
    },
    { 
      id: 2, 
      type: "maintenance", 
      message: "Vehicle DL-01-CD-5678 scheduled for PUC renewal", 
      time: "15 min ago",
      icon: AlertTriangle,
      color: "text-warning"
    },
    { 
      id: 3, 
      type: "route", 
      message: "Route optimization completed for Delhi-Bangalore corridor", 
      time: "1 hour ago",
      icon: TrendingUp,
      color: "text-primary"
    },
    { 
      id: 4, 
      type: "driver", 
      message: "Driver Ravi Kumar started shift", 
      time: "2 hours ago",
      icon: Users,
      color: "text-info"
    }
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-primary shadow-elevation">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${fleetHeroImage})` }}
        />
        <div className="relative p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-primary-foreground mb-2">
              Fleet Control Tower
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Monitor, optimize, and manage your entire fleet operations in real-time
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
                <MapPin className="w-3 h-3 mr-1" />
                121 Active Vehicles
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30">
                <Clock className="w-3 h-3 mr-1" />
                Real-time Tracking
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {kpiData.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>

      {/* Fleet Health & Activity */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Fleet Health Summary */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              Fleet Health Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {fleetHealth.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">{item.status}</span>
                  <span className="text-sm font-bold text-card-foreground">{item.count}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress 
                    value={item.percentage} 
                    className="flex-1"
                  />
                  <span className="text-xs text-muted-foreground w-8">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Live Fleet Map Placeholder */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Live Fleet Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                <p className="text-xs text-muted-foreground mt-1">121 vehicles tracked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <activity.icon className={`w-4 h-4 mt-0.5 ${activity.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-card-foreground">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}