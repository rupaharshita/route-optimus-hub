import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  MapPin, 
  Phone,
  Mail,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle2,
  Truck
} from "lucide-react";

const Drivers = () => {
  const driverData = [
    {
      id: "D-001",
      name: "Ravi Kumar",
      email: "ravi.kumar@nomadalle.com",
      phone: "+91 98765 43210",
      status: "Active",
      currentVehicle: "MH-12-AB-1234",
      currentRoute: "Mumbai → Delhi",
      hoursWorked: 6.5,
      maxHours: 11,
      rating: 4.8,
      completedDeliveries: 247,
      onTimeDeliveries: 96,
      licenseExpiry: "2025-08-15",
      certifications: ["Heavy Vehicle License", "Defensive Driving", "First Aid"],
      lastActivity: "2 hours ago"
    },
    {
      id: "D-002",
      name: "Priya Sharma",
      email: "priya.sharma@nomadalle.com",
      phone: "+91 87654 32109",
      status: "On Break",
      currentVehicle: "DL-01-CD-5678",
      currentRoute: "Delhi → Pune",
      hoursWorked: 4.2,
      maxHours: 10,
      rating: 4.9,
      completedDeliveries: 189,
      onTimeDeliveries: 98,
      licenseExpiry: "2024-12-22",
      certifications: ["Light Vehicle License", "Defensive Driving"],
      lastActivity: "15 minutes ago"
    },
    {
      id: "D-003",
      name: "Ankit Singh",
      email: "ankit.singh@nomadalle.com",
      phone: "+91 76543 21098",
      status: "Off Duty",
      currentVehicle: "Unassigned",
      currentRoute: "-",
      hoursWorked: 0,
      maxHours: 11,
      rating: 4.6,
      completedDeliveries: 312,
      onTimeDeliveries: 94,
      licenseExpiry: "2025-03-10",
      certifications: ["Heavy Vehicle License", "Medical Certificate"],
      lastActivity: "8 hours ago"
    },
    {
      id: "D-004",
      name: "Neha Patel",
      email: "neha.patel@nomadalle.com",
      phone: "+91 65432 10987",
      status: "Active",
      currentVehicle: "GJ-05-IJ-7890",
      currentRoute: "Ahmedabad → Bangalore",
      hoursWorked: 9.8,
      maxHours: 11,
      rating: 4.7,
      completedDeliveries: 156,
      onTimeDeliveries: 97,
      licenseExpiry: "2024-11-05",
      certifications: ["Heavy Vehicle License", "Hazardous Material"],
      lastActivity: "1 hour ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "On Break":
        return "bg-warning text-warning-foreground";
      case "Off Duty":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getHoursColor = (worked: number, max: number) => {
    const percentage = (worked / max) * 100;
    if (percentage >= 90) return "text-destructive";
    if (percentage >= 75) return "text-warning";
    return "text-success";
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Driver Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage driver profiles, assignments, working hours, and compliance
            </p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Add Driver
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Drivers</p>
                  <p className="text-2xl font-bold text-card-foreground">48</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-2xl font-bold text-success">28</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">On Break</p>
                  <p className="text-2xl font-bold text-warning">8</p>
                </div>
                <Clock className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Off Duty</p>
                  <p className="text-2xl font-bold text-muted-foreground">12</p>
                </div>
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-card border-border shadow-control">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search drivers by name, ID, or vehicle..."
                  className="pl-9 bg-muted border-border"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Driver Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {driverData.map((driver) => (
            <Card key={driver.id} className="bg-card border-border shadow-control hover:shadow-elevation transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${driver.name}`} />
                      <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">{driver.name}</h3>
                      <p className="text-sm text-muted-foreground">{driver.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(driver.status)}>
                    {driver.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">{driver.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">{driver.phone}</span>
                  </div>
                </div>

                {/* Current Assignment */}
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-medium text-card-foreground mb-2">Current Assignment</h4>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="w-4 h-4 text-muted-foreground" />
                      <span className="text-card-foreground">{driver.currentVehicle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-card-foreground">{driver.currentRoute}</span>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-card-foreground">Working Hours</span>
                    <span className={`text-sm font-bold ${getHoursColor(driver.hoursWorked, driver.maxHours)}`}>
                      {driver.hoursWorked}/{driver.maxHours}h
                    </span>
                  </div>
                  <Progress 
                    value={(driver.hoursWorked / driver.maxHours) * 100} 
                    className="w-full"
                  />
                </div>

                {/* Performance Metrics */}
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Award className="w-4 h-4 text-warning" />
                      <span className="text-lg font-bold text-card-foreground">{driver.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-card-foreground">{driver.completedDeliveries}</p>
                    <p className="text-xs text-muted-foreground">Deliveries</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-success">{driver.onTimeDeliveries}%</p>
                    <p className="text-xs text-muted-foreground">On Time</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <p className="text-sm font-medium text-card-foreground mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {driver.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Compliance Alert */}
                {new Date(driver.licenseExpiry) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) && (
                  <div className="flex items-center gap-2 p-2 bg-warning/10 border border-warning/20 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span className="text-sm text-warning">License expires {driver.licenseExpiry}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Last activity: {driver.lastActivity}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      Assign Route
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Alerts */}
        <Card className="bg-card border-border shadow-control border-warning/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="w-5 h-5" />
              Compliance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-card-foreground">3 licenses expiring within 30 days</p>
                    <p className="text-sm text-muted-foreground">Neha Patel (Nov 5), Rajesh Gupta (Nov 12), Sunita Verma (Nov 18)</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-info/10 border border-info/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-info" />
                  <div>
                    <p className="font-medium text-card-foreground">2 drivers approaching HOS limits</p>
                    <p className="text-sm text-muted-foreground">Monitor driving hours for Ravi Kumar and Neha Patel</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Monitor
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FleetLayout>
  );
};

export default Drivers;