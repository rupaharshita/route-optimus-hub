import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Fuel as FuelIcon, 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  Lightbulb,
  DollarSign,
  Gauge,
  Calendar,
  Target,
  AlertTriangle
} from "lucide-react";

const Fuel = () => {
  const fuelData = [
    { month: "Jan", consumption: 4200, cost: 420000, efficiency: 15.2 },
    { month: "Feb", consumption: 3800, cost: 380000, efficiency: 16.5 },
    { month: "Mar", consumption: 4100, cost: 410000, efficiency: 15.8 },
    { month: "Apr", consumption: 3900, cost: 390000, efficiency: 16.1 },
    { month: "May", consumption: 3700, cost: 370000, efficiency: 16.7 },
    { month: "Jun", consumption: 3600, cost: 360000, efficiency: 17.2 }
  ];

  const recommendations = [
    {
      id: 1,
      type: "Route Optimization",
      potential: "₹35,000/month",
      description: "Optimize routes for vehicles MH-12-AB-1234, TN-07-GH-3456, and KA-03-EF-9012",
      priority: "High",
      impact: "12% fuel savings"
    },
    {
      id: 2,
      type: "Driver Training",
      potential: "₹22,000/month",
      description: "Eco-driving training for 5 drivers with aggressive acceleration patterns",
      priority: "Medium",
      impact: "8% efficiency gain"
    },
    {
      id: 3,
      type: "Maintenance",
      potential: "₹14,000/month",
      description: "Tyre pressure optimization and air filter replacements",
      priority: "Medium",
      impact: "5% consumption reduction"
    },
    {
      id: 4,
      type: "Fuel Station Optimization",
      potential: "₹9,500/month",
      description: "Switch to IOCL/BPCL stations with fleet discounts",
      priority: "Low",
      impact: "3% cost reduction"
    }
  ];

  const vehicleFuelStatus = [
    { id: "MH-12-AB-1234", level: 78, kmpl: 16.8, status: "Good", lastFill: "2 hours ago" },
    { id: "DL-01-CD-5678", level: 92, kmpl: 18.2, status: "Excellent", lastFill: "4 hours ago" },
    { id: "KA-03-EF-9012", level: 34, kmpl: 14.9, status: "Low", lastFill: "18 hours ago" },
    { id: "GJ-05-IJ-7890", level: 45, kmpl: 15.1, status: "Fair", lastFill: "12 hours ago" },
    { id: "TN-07-GH-3456", level: 67, kmpl: 16.5, status: "Good", lastFill: "8 hours ago" },
    { id: "RJ-14-MN-2468", level: 88, kmpl: 17.1, status: "Excellent", lastFill: "1 hour ago" }
  ];

  const getFuelLevelColor = (level: number) => {
    if (level < 25) return "bg-destructive";
    if (level < 50) return "bg-warning";
    return "bg-success";
  };

  const getFuelStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "text-success";
      case "Good": return "text-primary";
      case "Fair": return "text-warning";
      case "Low": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <FuelIcon className="w-8 h-8 text-primary" />
              Fuel Optimization
            </h1>
            <p className="text-muted-foreground mt-1">
              Analytics dashboard with fuel consumption trends, savings, and optimization recommendations
            </p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
            <BarChart3 className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Consumption</p>
                  <p className="text-2xl font-bold text-card-foreground">3,600</p>
                  <p className="text-xs text-success flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -5.3% from last month
                  </p>
                </div>
                <FuelIcon className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Cost</p>
                  <p className="text-2xl font-bold text-card-foreground">₹3,60,000</p>
                  <p className="text-xs text-success flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -₹10,000 saved
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Efficiency</p>
                  <p className="text-2xl font-bold text-card-foreground">16.8 KMPL</p>
                  <p className="text-xs text-success flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +0.3 improvement
                  </p>
                </div>
                <Gauge className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Potential Savings</p>
                  <p className="text-2xl font-bold text-warning">₹80,500</p>
                  <p className="text-xs text-warning">Per month available</p>
                </div>
                <Target className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Fuel Consumption Trend */}
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Fuel Consumption Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fuelData.map((month, index) => (
                  <div key={month.month} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-card-foreground">{month.month} 2024</span>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">{month.consumption} litres</span>
                        <span className="text-muted-foreground">₹{month.cost.toLocaleString()}</span>
                        <span className="text-primary">{month.efficiency} KMPL</span>
                      </div>
                    </div>
                    <Progress value={(month.consumption / 4200) * 100} className="w-full" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-success" />
                  <span className="font-medium text-success">Trending Downward</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  14.3% reduction in fuel consumption over the last 6 months through optimization efforts.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Fuel Status */}
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FuelIcon className="w-5 h-5 text-primary" />
                Vehicle Fuel Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {vehicleFuelStatus.map((vehicle) => (
                <div key={vehicle.id} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-card-foreground">{vehicle.id}</span>
                    <Badge className={`${getFuelStatusColor(vehicle.status)}`} variant="outline">
                      {vehicle.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Fuel Level</span>
                    <span className={getFuelStatusColor(vehicle.status)}>{vehicle.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getFuelLevelColor(vehicle.level)}`}
                      style={{ width: `${vehicle.level}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>KMPL: {vehicle.kmpl}</span>
                    <span>Last fill: {vehicle.lastFill}</span>
                  </div>
                  
                  {vehicle.level < 30 && (
                    <div className="flex items-center gap-2 mt-2 p-2 bg-warning/10 border border-warning/20 rounded">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      <span className="text-sm text-warning">Low fuel - refill recommended</span>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Optimization Recommendations */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-warning" />
              Fuel Optimization Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-card-foreground">{rec.type}</h4>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-success">{rec.potential}</p>
                      <p className="text-xs text-muted-foreground">{rec.impact}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Implement
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-warning" />
                <span className="font-medium text-warning">Total Potential Monthly Savings: ₹80,500</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Implementing all recommendations could reduce fuel costs by 28% and improve overall fleet efficiency.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fuel Alerts */}
        <Card className="bg-card border-border shadow-control border-warning/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="w-5 h-5" />
              Fuel Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <FuelIcon className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-destructive">KA-03-EF-9012 - Critical Fuel Level</p>
                    <p className="text-sm text-muted-foreground">34% remaining - immediate refuel required</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Locate Station
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-warning">Fuel Card Expiry Alert</p>
                    <p className="text-sm text-muted-foreground">5 fuel cards expire within 30 days</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Review Cards
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-info/10 border border-info/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-info" />
                  <div>
                    <p className="font-medium text-info">Efficiency Improvement Detected</p>
                    <p className="text-sm text-muted-foreground">Fleet average KMPL improved by 4% this week</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FleetLayout>
  );
};

export default Fuel;