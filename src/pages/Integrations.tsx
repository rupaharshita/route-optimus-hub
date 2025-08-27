import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Settings, 
  Zap, 
  Wifi, 
  Database, 
  Key,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Activity,
  Globe,
  Smartphone,
  Truck,
  BarChart3
} from "lucide-react";

const Integrations = () => {
  const connectedIntegrations = [
    {
      name: "Telematics API",
      provider: "Geotab",
      status: "Connected",
      type: "Vehicle Data",
      lastSync: "2 minutes ago",
      dataPoints: "1,247 daily",
      description: "Real-time vehicle location, speed, and diagnostics"
    },
    {
      name: "Fuel Management",
      provider: "FleetCor",
      status: "Connected",
      type: "Fuel Data",
      lastSync: "15 minutes ago",
      dataPoints: "89 transactions",
      description: "Fuel card transactions and consumption tracking"
    },
    {
      name: "Route Planning",
      provider: "HERE Maps",
      status: "Connected",
      type: "Navigation",
      lastSync: "1 hour ago",
      dataPoints: "342 routes",
      description: "Advanced route optimization and traffic data"
    },
    {
      name: "Driver Mobile App",
      provider: "Nomadalle",
      status: "Active",
      type: "Mobile",
      lastSync: "Real-time",
      dataPoints: "48 active users",
      description: "Driver communication and trip logging"
    }
  ];

  const availableIntegrations = [
    {
      name: "Electronic Logging Device",
      provider: "Omnitracs",
      type: "ELD/HOS",
      description: "Hours of service compliance and electronic logging",
      features: ["HOS Tracking", "DVIR", "Compliance Reporting"]
    },
    {
      name: "Maintenance Management",
      provider: "Fleetio",
      type: "Maintenance",
      description: "Preventive maintenance scheduling and work orders",
      features: ["Service Scheduling", "Parts Management", "Cost Tracking"]
    },
    {
      name: "Insurance Telematics",
      provider: "Progressive",
      type: "Insurance",
      description: "Usage-based insurance and risk assessment",
      features: ["Risk Scoring", "Premium Adjustment", "Incident Detection"]
    },
    {
      name: "Load Board Integration",
      provider: "DAT",
      type: "Freight",
      description: "Load matching and freight marketplace access",
      features: ["Load Matching", "Rate Analytics", "Carrier Network"]
    }
  ];

  const iotDevices = [
    {
      id: "IOT-001",
      name: "GPS Tracker",
      vehicle: "FL-001",
      status: "Online",
      lastUpdate: "30 seconds ago",
      batteryLevel: 87
    },
    {
      id: "IOT-002", 
      name: "Temperature Sensor",
      vehicle: "FL-003",
      status: "Online",
      lastUpdate: "1 minute ago",
      batteryLevel: 92
    },
    {
      id: "IOT-003",
      name: "Fuel Level Sensor",
      vehicle: "FL-007",
      status: "Offline",
      lastUpdate: "2 hours ago",
      batteryLevel: 23
    },
    {
      id: "IOT-004",
      name: "Door Sensor",
      vehicle: "FL-012",
      status: "Online",
      lastUpdate: "45 seconds ago",
      batteryLevel: 76
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connected":
      case "Active":
      case "Online":
        return "bg-success text-success-foreground";
      case "Disconnected":
      case "Offline":
        return "bg-destructive text-destructive-foreground";
      case "Warning":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level < 25) return "text-destructive";
    if (level < 50) return "text-warning";
    return "text-success";
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary" />
              Technology & Integrations
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage API keys, IoT devices, and third-party integrations
            </p>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </Button>
        </div>

        {/* Integration Status Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Integrations</p>
                  <p className="text-2xl font-bold text-card-foreground">12</p>
                </div>
                <Zap className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">IoT Devices</p>
                  <p className="text-2xl font-bold text-card-foreground">156</p>
                </div>
                <Wifi className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">API Calls Today</p>
                  <p className="text-2xl font-bold text-card-foreground">24.7K</p>
                </div>
                <Database className="w-8 h-8 text-info" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-control">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Health</p>
                  <p className="text-2xl font-bold text-success">98.9%</p>
                </div>
                <Activity className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Connected Integrations */}
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Connected Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {connectedIntegrations.map((integration, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        {integration.type === "Vehicle Data" && <Truck className="w-5 h-5 text-primary-foreground" />}
                        {integration.type === "Fuel Data" && <BarChart3 className="w-5 h-5 text-primary-foreground" />}
                        {integration.type === "Navigation" && <Globe className="w-5 h-5 text-primary-foreground" />}
                        {integration.type === "Mobile" && <Smartphone className="w-5 h-5 text-primary-foreground" />}
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">{integration.name}</h4>
                        <p className="text-sm text-muted-foreground">{integration.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(integration.status)}>
                        {integration.status}
                      </Badge>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Last sync: {integration.lastSync}</span>
                    <span className="text-primary">{integration.dataPoints}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Docs
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Available Integrations */}
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Available Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableIntegrations.map((integration, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-card-foreground">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground">{integration.provider}</p>
                    </div>
                    <Badge variant="outline">{integration.type}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {integration.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-gradient-secondary text-secondary-foreground">
                      Connect
                    </Button>
                    <Button variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* API Configuration */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              API Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key">Master API Key</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="api-key"
                      type="password"
                      value="sk-nmll-••••••••••••••••"
                      readOnly
                      className="bg-muted border-border"
                    />
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <Input
                    id="webhook-url"
                    placeholder="https://your-domain.com/webhooks"
                    className="bg-muted border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rate-limit">Rate Limit (requests/minute)</Label>
                  <Input
                    id="rate-limit"
                    type="number"
                    defaultValue="1000"
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-card-foreground">API Usage Statistics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Requests Today</span>
                    <span className="font-medium">24,732</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-medium text-success">99.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Response Time</span>
                    <span className="font-medium">142ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Quota</span>
                    <span className="font-medium">67% used</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* IoT Device Management */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              IoT Device Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Device ID</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Vehicle</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Update</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Battery</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {iotDevices.map((device) => (
                    <tr key={device.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <span className="font-medium text-card-foreground">{device.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{device.name}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{device.vehicle}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(device.status)}>
                          {device.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{device.lastUpdate}</span>
                      </td>
                      <td className="p-4">
                        <span className={`font-medium ${getBatteryColor(device.batteryLevel)}`}>
                          {device.batteryLevel}%
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            Configure
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reset
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

        {/* Integration Logs */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Integration Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium text-card-foreground">Telematics sync completed</p>
                    <p className="text-sm text-muted-foreground">2:47 PM - 1,247 data points synchronized</p>
                  </div>
                </div>
                <Badge className="bg-success text-success-foreground">Success</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-card-foreground">Fuel API rate limit warning</p>
                    <p className="text-sm text-muted-foreground">2:23 PM - Approaching rate limit threshold</p>
                  </div>
                </div>
                <Badge className="bg-warning text-warning-foreground">Warning</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium text-card-foreground">Route optimization API connected</p>
                    <p className="text-sm text-muted-foreground">1:15 PM - New integration established successfully</p>
                  </div>
                </div>
                <Badge className="bg-success text-success-foreground">Success</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FleetLayout>
  );
};

export default Integrations;