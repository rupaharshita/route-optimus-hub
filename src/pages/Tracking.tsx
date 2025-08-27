import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Truck, 
  Navigation, 
  Clock, 
  AlertTriangle,
  Activity,
  Zap,
  Users,
  Route,
  Target
} from "lucide-react";

const Tracking = () => {
  const activeVehicles = [
    {
      id: "FL-001",
      driver: "John Smith",
      status: "In Transit",
      location: "I-90, Mile 127",
      destination: "New York, NY",
      eta: "2:45 PM",
      speed: "65 mph",
      fuel: "78%",
      progress: 65
    },
    {
      id: "FL-002",
      driver: "Sarah Johnson",
      status: "Loading",
      location: "Warehouse A",
      destination: "Boston, MA",
      eta: "4:20 PM",
      speed: "0 mph",
      fuel: "92%",
      progress: 5
    },
    {
      id: "FL-005",
      driver: "Lisa Brown",
      status: "In Transit",
      location: "I-95, Mile 203",
      destination: "Miami, FL",
      eta: "11:30 PM",
      speed: "58 mph",
      fuel: "45%",
      progress: 42
    },
    {
      id: "FL-007",
      driver: "Mike Wilson",
      status: "Delivering",
      location: "Downtown Chicago",
      destination: "Chicago, IL",
      eta: "In Progress",
      speed: "15 mph",
      fuel: "67%",
      progress: 95
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-primary text-primary-foreground";
      case "Loading":
        return "bg-warning text-warning-foreground";
      case "Delivering":
        return "bg-success text-success-foreground";
      case "Idle":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getFuelColor = (fuel: string) => {
    const fuelLevel = parseInt(fuel.replace('%', ''));
    if (fuelLevel < 25) return "text-destructive";
    if (fuelLevel < 50) return "text-warning";
    return "text-success";
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              Fleet & Asset Tracking
            </h1>
            <p className="text-muted-foreground mt-1">
              Real-time tracking, vehicle clusters, and route overlays for complete fleet visibility
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-primary text-primary-foreground shadow-glow">
              <Activity className="w-4 h-4 mr-2" />
              Live Tracking
            </Badge>
            <Button variant="outline">
              <Target className="w-4 h-4 mr-2" />
              Center Map
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Vehicles</p>
                  <p className="text-2xl font-bold text-card-foreground">28</p>
                </div>
                <Truck className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Transit</p>
                  <p className="text-2xl font-bold text-primary">22</p>
                </div>
                <Navigation className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Speed</p>
                  <p className="text-2xl font-bold text-success">62 mph</p>
                </div>
                <Zap className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Alerts</p>
                  <p className="text-2xl font-bold text-warning">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Live Map */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Live Fleet Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                  
                  {/* Simulated Map Elements */}
                  <div className="absolute inset-4 border border-border/50 rounded">
                    {/* Vehicle Markers */}
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse shadow-glow">
                      <div className="absolute -top-8 -left-6 bg-card border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                        FL-001 - 65mph
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-success rounded-full animate-pulse">
                      <div className="absolute -top-8 -left-6 bg-card border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                        FL-007 - Delivering
                      </div>
                    </div>
                    <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-warning rounded-full animate-pulse">
                      <div className="absolute -top-8 -left-6 bg-card border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                        FL-002 - Loading
                      </div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse">
                      <div className="absolute -top-8 -left-6 bg-card border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                        FL-005 - 58mph
                      </div>
                    </div>

                    {/* Route Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path
                        d="M 33% 25% Q 50% 15% 75% 30%"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M 25% 50% Q 40% 40% 60% 45%"
                        stroke="hsl(var(--success))"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                  </div>

                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium text-card-foreground mb-2">Interactive Fleet Map</p>
                    <p className="text-sm text-muted-foreground mb-4">Real-time vehicle positions and route tracking</p>
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        In Transit
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Delivering
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        Loading
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Satellite View
                    </Button>
                    <Button variant="outline" size="sm">
                      Traffic Layer
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Cluster View
                    </Button>
                    <Button variant="outline" size="sm">
                      Route Overlay
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicle Status Panel */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Active Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-card-foreground">{vehicle.id}</span>
                      </div>
                      <Badge className={getStatusColor(vehicle.status)}>
                        {vehicle.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{vehicle.driver}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-card-foreground">{vehicle.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Route className="w-3 h-3 text-muted-foreground" />
                        <span className="text-card-foreground">{vehicle.destination}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-card-foreground">ETA: {vehicle.eta}</span>
                        </div>
                        <span className="text-card-foreground">{vehicle.speed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Fuel:</span>
                        <span className={getFuelColor(vehicle.fuel)}>{vehicle.fuel}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-muted-foreground">{vehicle.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${vehicle.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Alerts */}
            <Card className="bg-card border-border shadow-control border-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="w-5 h-5" />
                  Live Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <span className="font-medium text-destructive">FL-005 - Low Fuel</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Fuel level at 45% - nearest station 12 miles</p>
                </div>
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-warning" />
                    <span className="font-medium text-warning">FL-001 - Delayed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">15 minutes behind schedule due to traffic</p>
                </div>
                <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-info" />
                    <span className="font-medium text-info">Route Update</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Alternative route suggested for FL-007</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </FleetLayout>
  );
};

export default Tracking;