import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Route, 
  Zap, 
  MapPin, 
  Clock, 
  TrendingUp,
  TrendingDown,
  Calculator,
  Truck,
  Users,
  Target
} from "lucide-react";
import { useState } from "react";

const RouteOptimization = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationComplete, setOptimizationComplete] = useState(false);

  const handleOptimization = () => {
    setIsOptimizing(true);
    // Simulate optimization process
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizationComplete(true);
    }, 3000);
  };

  const deliveryData = [
    { id: 1, address: "123 Main St, Chicago, IL", priority: "High", timeWindow: "9:00 AM - 11:00 AM" },
    { id: 2, address: "456 Oak Ave, Chicago, IL", priority: "Medium", timeWindow: "11:00 AM - 1:00 PM" },
    { id: 3, address: "789 Elm St, Chicago, IL", priority: "Low", timeWindow: "1:00 PM - 3:00 PM" },
    { id: 4, address: "321 Pine Rd, Chicago, IL", priority: "High", timeWindow: "3:00 PM - 5:00 PM" },
  ];

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Route className="w-8 h-8 text-primary" />
              Route Optimization
            </h1>
            <p className="text-muted-foreground mt-1">
              Optimize delivery routes using advanced Hybrid Quantum-Classical algorithms
            </p>
          </div>
          <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2 shadow-glow">
            <Zap className="w-4 h-4 mr-2" />
            Quantum-Enhanced
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Route Input Form */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Delivery Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="depot">Depot Location</Label>
                    <Input
                      id="depot"
                      placeholder="Enter depot address"
                      defaultValue="Nomadalle Depot, Chicago, IL"
                      className="bg-muted border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicles">Available Vehicles</Label>
                    <Input
                      id="vehicles"
                      type="number"
                      placeholder="Number of vehicles"
                      defaultValue="5"
                      className="bg-muted border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Vehicle Capacity (lbs)</Label>
                    <Input
                      id="capacity"
                      type="number"
                      placeholder="Max weight capacity"
                      defaultValue="5000"
                      className="bg-muted border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxTime">Max Route Time (hours)</Label>
                    <Input
                      id="maxTime"
                      type="number"
                      placeholder="Maximum hours per route"
                      defaultValue="8"
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="deliveries">Delivery Addresses</Label>
                  <Textarea
                    id="deliveries"
                    placeholder="Enter delivery addresses (one per line)"
                    rows={6}
                    className="bg-muted border-border"
                    defaultValue={deliveryData.map(d => d.address).join('\n')}
                  />
                </div>

                <Button
                  onClick={handleOptimization}
                  disabled={isOptimizing}
                  className="w-full bg-gradient-primary text-primary-foreground shadow-glow"
                >
                  {isOptimizing ? (
                    <>
                      <Calculator className="w-4 h-4 mr-2 animate-spin" />
                      Running Quantum Optimization...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Run Hybrid Quantum-Classical Optimization
                    </>
                  )}
                </Button>

                {isOptimizing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Optimization Progress</span>
                      <span className="text-primary">67%</span>
                    </div>
                    <Progress value={67} className="w-full" />
                    <p className="text-xs text-muted-foreground">
                      Quantum solver analyzing 1,247 route combinations...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Current Delivery List */}
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Delivery Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {deliveryData.map((delivery) => (
                    <div key={delivery.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-card-foreground">{delivery.address}</p>
                        <p className="text-xs text-muted-foreground">{delivery.timeWindow}</p>
                      </div>
                      <Badge variant={delivery.priority === "High" ? "destructive" : delivery.priority === "Medium" ? "default" : "secondary"}>
                        {delivery.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results and Comparison */}
          <div className="space-y-6">
            {optimizationComplete && (
              <Card className="bg-card border-border shadow-control border-success/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <TrendingUp className="w-5 h-5" />
                    Optimization Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Distance Saved</p>
                      <p className="text-2xl font-bold text-success">127 miles</p>
                      <p className="text-xs text-success">-23% reduction</p>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Time Saved</p>
                      <p className="text-2xl font-bold text-primary">2.4 hours</p>
                      <p className="text-xs text-primary">-18% reduction</p>
                    </div>
                    <div className="text-center p-4 bg-warning/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Fuel Cost Savings</p>
                      <p className="text-2xl font-bold text-warning">$89</p>
                      <p className="text-xs text-warning">Per day</p>
                    </div>
                    <div className="text-center p-4 bg-info/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Efficiency Gain</p>
                      <p className="text-2xl font-bold text-info">94.8%</p>
                      <p className="text-xs text-info">+12% improvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Route Comparison */}
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Route Efficiency Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current Route */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">Current Route</h4>
                    <Badge variant="outline">Traditional Algorithm</Badge>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">547 miles</p>
                        <p className="text-xs text-muted-foreground">Total Distance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">13.2 hours</p>
                        <p className="text-xs text-muted-foreground">Total Time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">5 vehicles</p>
                        <p className="text-xs text-muted-foreground">Required</p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-border" />

                {/* Optimized Route */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-card-foreground">Optimized Route</h4>
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      <Zap className="w-3 h-3 mr-1" />
                      Quantum-Enhanced
                    </Badge>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Route className="w-4 h-4 text-success" />
                      <div>
                        <p className="text-sm font-medium text-success">420 miles</p>
                        <p className="text-xs text-success">-23% reduction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-success" />
                      <div>
                        <p className="text-sm font-medium text-success">10.8 hours</p>
                        <p className="text-xs text-success">-18% reduction</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-success" />
                      <div>
                        <p className="text-sm font-medium text-success">4 vehicles</p>
                        <p className="text-xs text-success">-1 vehicle saved</p>
                      </div>
                    </div>
                  </div>
                </div>

                {optimizationComplete && (
                  <div className="pt-4 space-y-3">
                    <Button className="w-full bg-gradient-secondary text-secondary-foreground">
                      Apply Optimized Routes
                    </Button>
                    <div className="grid gap-2 md:grid-cols-2">
                      <Button variant="outline" size="sm">
                        Export Routes
                      </Button>
                      <Button variant="outline" size="sm">
                        Schedule Drivers
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quantum Algorithm Info */}
            <Card className="bg-gradient-primary/5 border-primary/20 shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" />
                  Hybrid Quantum-Classical Solver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-card-foreground">
                    Our advanced optimization engine combines quantum computing principles with classical algorithms
                    to solve complex vehicle routing problems more efficiently than traditional methods.
                  </p>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm text-card-foreground">23% better optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-card-foreground">50% faster computation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </FleetLayout>
  );
};

export default RouteOptimization;