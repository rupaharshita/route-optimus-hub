import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Plus, 
  Truck, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle2,
  Settings,
  Eye
} from "lucide-react";

const Vehicles = () => {
  const vehicleData = [
    {
      id: "MH-12-AB-1234",
      type: "Tata Prima",
      status: "Available",
      location: "Mumbai, Maharashtra",
      driver: "Ravi Kumar",
      lastMaintenance: "2024-01-15",
      nextService: "2024-03-15",
      mileage: "1,45,230",
      condition: "Excellent"
    },
    {
      id: "DL-01-CD-5678",
      type: "Mahindra Bolero",
      status: "In Transit",
      location: "En Route to Pune",
      driver: "Priya Sharma",
      lastMaintenance: "2024-01-22",
      nextService: "2024-04-22",
      mileage: "89,450",
      condition: "Good"
    },
    {
      id: "KA-03-EF-9012",
      type: "Ashok Leyland",
      status: "Under Maintenance",
      location: "Service Center Bangalore",
      driver: "Unassigned",
      lastMaintenance: "2024-02-01",
      nextService: "In Progress",
      mileage: "1,98,750",
      condition: "Needs Repair"
    },
    {
      id: "TN-07-GH-3456",
      type: "Eicher Pro 2049",
      status: "Available",
      location: "Chennai, Tamil Nadu",
      driver: "Ankit Singh",
      lastMaintenance: "2024-01-10",
      nextService: "2024-02-28",
      mileage: "67,890",
      condition: "Good"
    },
    {
      id: "GJ-05-IJ-7890",
      type: "Force Traveller",
      status: "In Transit",
      location: "NH-48, Gujarat",
      driver: "Neha Patel",
      lastMaintenance: "2024-01-28",
      nextService: "2024-04-28",
      mileage: "1,12,340",
      condition: "Excellent"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-success text-success-foreground";
      case "In Transit":
        return "bg-primary text-primary-foreground";
      case "Under Maintenance":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "Good":
        return <CheckCircle2 className="w-4 h-4 text-primary" />;
      case "Needs Repair":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Truck className="w-8 h-8 text-primary" />
              Vehicle & Asset Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitor and manage your entire fleet of vehicles and assets
            </p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Add Vehicle
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Vehicles</p>
                  <p className="text-2xl font-bold text-card-foreground">121</p>
                </div>
                <Truck className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available</p>
                  <p className="text-2xl font-bold text-success">87</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Transit</p>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
                <MapPin className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Maintenance</p>
                  <p className="text-2xl font-bold text-warning">6</p>
                </div>
                <Settings className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles..."
                  className="pl-9 bg-muted border-border"
                />
              </div>
              <Select>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="tata">Tata Prima</SelectItem>
                  <SelectItem value="mahindra">Mahindra Bolero</SelectItem>
                  <SelectItem value="ashok">Ashok Leyland</SelectItem>
                  <SelectItem value="eicher">Eicher Pro</SelectItem>
                  <SelectItem value="force">Force Traveller</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="transit">In Transit</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi NCR</SelectItem>
                  <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                  <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                  <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-muted border-border">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="repair">Needs Repair</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Table */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              Fleet Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Vehicle ID</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Location</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Driver</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Mileage</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Condition</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Next Service</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleData.map((vehicle) => (
                    <tr key={vehicle.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <span className="font-medium text-card-foreground">{vehicle.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{vehicle.type}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(vehicle.status)}>
                          {vehicle.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-card-foreground">{vehicle.location}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{vehicle.driver}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{vehicle.mileage} km</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {getConditionIcon(vehicle.condition)}
                          <span className="text-card-foreground">{vehicle.condition}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{vehicle.nextService}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </FleetLayout>
  );
};

export default Vehicles;