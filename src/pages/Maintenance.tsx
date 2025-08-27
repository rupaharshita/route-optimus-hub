import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { 
  Wrench, 
  Calendar as CalendarIcon, 
  List, 
  AlertTriangle,
  Clock,
  CheckCircle2,
  Filter,
  Plus
} from "lucide-react";
import { useState } from "react";

const Maintenance = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<"calendar" | "list">("list");

  const maintenanceData = [
    {
      id: "M-001",
      vehicleId: "FL-001",
      type: "Oil Change",
      status: "Scheduled",
      dueDate: "2024-03-15",
      priority: "Medium",
      estimatedHours: 2,
      cost: "$150",
      description: "Regular oil change and filter replacement"
    },
    {
      id: "M-002",
      vehicleId: "FL-003",
      type: "Brake Repair",
      status: "In Progress",
      dueDate: "2024-02-20",
      priority: "High",
      estimatedHours: 4,
      cost: "$450",
      description: "Front brake pad replacement and rotor resurfacing"
    },
    {
      id: "M-003",
      vehicleId: "FL-007",
      type: "Tire Rotation",
      status: "Overdue",
      dueDate: "2024-02-10",
      priority: "High",
      estimatedHours: 1,
      cost: "$80",
      description: "Tire rotation and alignment check"
    },
    {
      id: "M-004",
      vehicleId: "FL-012",
      type: "Engine Tune-up",
      status: "Scheduled",
      dueDate: "2024-03-22",
      priority: "Medium",
      estimatedHours: 6,
      cost: "$650",
      description: "Complete engine tune-up and diagnostic"
    },
    {
      id: "M-005",
      vehicleId: "FL-018",
      type: "Transmission Service",
      status: "Completed",
      dueDate: "2024-02-15",
      priority: "Low",
      estimatedHours: 3,
      cost: "$320",
      description: "Transmission fluid change and filter replacement"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success text-success-foreground";
      case "In Progress":
        return "bg-primary text-primary-foreground";
      case "Scheduled":
        return "bg-info text-info-foreground";
      case "Overdue":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      case "Low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "In Progress":
        return <Wrench className="w-4 h-4" />;
      case "Overdue":
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary" />
              Maintenance Management
            </h1>
            <p className="text-muted-foreground mt-1">
              Schedule and track vehicle maintenance, repairs, and inspections
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="px-3"
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
              <Button
                variant={viewMode === "calendar" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("calendar")}
                className="px-3"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                Calendar
              </Button>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Maintenance
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-2xl font-bold text-info">12</p>
                </div>
                <Clock className="w-8 h-8 text-info" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-primary">5</p>
                </div>
                <Wrench className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold text-destructive">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-success">48</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {viewMode === "calendar" ? (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Calendar View */}
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Maintenance Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-border"
                />
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Upcoming This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {maintenanceData.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <p className="font-medium text-card-foreground">{item.type}</p>
                        <p className="text-sm text-muted-foreground">{item.vehicleId} - {item.dueDate}</p>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <List className="w-5 h-5 text-primary" />
                  Maintenance Schedule
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Task ID</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Vehicle</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Due Date</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Priority</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Hours</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Cost</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceData.map((item) => (
                      <tr key={item.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <span className="font-medium text-card-foreground">{item.id}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-card-foreground">{item.vehicleId}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-card-foreground">{item.type}</span>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(item.status)}>
                            {getStatusIcon(item.status)}
                            <span className="ml-1">{item.status}</span>
                          </Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-card-foreground">{item.dueDate}</span>
                        </td>
                        <td className="p-4">
                          <Badge className={getPriorityColor(item.priority)}>
                            {item.priority}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-card-foreground">{item.estimatedHours}h</span>
                        </td>
                        <td className="p-4">
                          <span className="text-card-foreground">{item.cost}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            <Button variant="ghost" size="sm">
                              Edit
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
        )}

        {/* Critical Alerts */}
        <Card className="bg-card border-border shadow-control border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              Critical Maintenance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-card-foreground">Vehicle FL-007 - Tire Rotation Overdue</p>
                    <p className="text-sm text-muted-foreground">Due: 2024-02-10 (10 days overdue)</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Schedule Now
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-card-foreground">Vehicle FL-003 - Brake Inspection Due Soon</p>
                    <p className="text-sm text-muted-foreground">Due: 2024-02-25 (5 days remaining)</p>
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

export default Maintenance;