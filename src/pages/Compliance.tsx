import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  FileText,
  Calendar,
  Users,
  Truck,
  BarChart3,
  Download,
  Eye,
  ExternalLink
} from "lucide-react";

const Compliance = () => {
  const complianceOverview = {
    overall: 94,
    safety: 96,
    regulatory: 92,
    environmental: 95,
    driver: 93
  };

  const violations = [
    {
      id: "V-001",
      type: "Driving Hours Violation",
      severity: "High",
      driver: "Ravi Kumar",
      vehicle: "TN-07-GH-3456",
      date: "2024-02-18",
      status: "Under Review",
      description: "Exceeded maximum driving hours as per Motor Vehicle Act"
    },
    {
      id: "V-002",
      type: "Speed Limit Violation",
      severity: "Medium",
      driver: "Ankit Singh",
      vehicle: "KA-03-EF-9012",
      date: "2024-02-17",
      status: "Resolved",
      description: "Speed exceeded by 15 km/h in highway construction zone"
    },
    {
      id: "V-003",
      type: "Pre-Trip Inspection",
      severity: "Low",
      driver: "Priya Sharma",
      vehicle: "DL-01-CD-5678",
      date: "2024-02-16",
      status: "Pending",
      description: "Incomplete vehicle fitness checklist"
    }
  ];

  const expiringDocuments = [
    {
      type: "Medical Fitness Certificate",
      driver: "Neha Patel",
      expiryDate: "2024-03-15",
      daysLeft: 23,
      status: "Critical"
    },
    {
      type: "Heavy Vehicle Driving License",
      driver: "Rajesh Gupta",
      expiryDate: "2024-04-22",
      daysLeft: 61,
      status: "Warning"
    },
    {
      type: "PUC Certificate",
      vehicle: "MH-12-AB-1234",
      expiryDate: "2024-05-10",
      daysLeft: 79,
      status: "Normal"
    },
    {
      type: "Vehicle Registration (RC)",
      vehicle: "KA-03-EF-9012",
      expiryDate: "2024-03-30",
      daysLeft: 38,
      status: "Warning"
    },
    {
      type: "Vehicle Insurance",
      vehicle: "DL-01-CD-5678",
      expiryDate: "2024-03-20",
      daysLeft: 28,
      status: "Critical"
    }
  ];

  const safetyMetrics = [
    { metric: "Accident Rate", value: "0.2 per 100K km", trend: "down", change: "-15%" },
    { metric: "Safety Score", value: "96.2/100", trend: "up", change: "+2.1%" },
    { metric: "Incidents Reported", value: "3 this month", trend: "down", change: "-40%" },
    { metric: "Training Completed", value: "94% compliance", trend: "up", change: "+5%" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      case "Low":
        return "bg-info text-info-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-success text-success-foreground";
      case "Under Review":
        return "bg-warning text-warning-foreground";
      case "Pending":
        return "bg-info text-info-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getExpiryStatusColor = (status: string) => {
    switch (status) {
      case "Critical":
        return "text-destructive";
      case "Warning":
        return "text-warning";
      case "Normal":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Safety & Compliance
            </h1>
            <p className="text-muted-foreground mt-1">
              Monitor compliance status, safety violations, and regulatory requirements
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
              <FileText className="w-4 h-4 mr-2" />
              Generate Audit Report
            </Button>
          </div>
        </div>

        {/* Compliance Overview */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Compliance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-5">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{complianceOverview.overall}%</div>
                <p className="text-sm text-muted-foreground">Overall Compliance</p>
                <Progress value={complianceOverview.overall} className="w-full mt-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">{complianceOverview.safety}%</div>
                <p className="text-sm text-muted-foreground">Safety</p>
                <Progress value={complianceOverview.safety} className="w-full mt-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-2">{complianceOverview.regulatory}%</div>
                <p className="text-sm text-muted-foreground">Regulatory</p>
                <Progress value={complianceOverview.regulatory} className="w-full mt-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">{complianceOverview.environmental}%</div>
                <p className="text-sm text-muted-foreground">Environmental</p>
                <Progress value={complianceOverview.environmental} className="w-full mt-2" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info mb-2">{complianceOverview.driver}%</div>
                <p className="text-sm text-muted-foreground">Driver</p>
                <Progress value={complianceOverview.driver} className="w-full mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Safety Metrics */}
          <Card className="bg-card border-border shadow-control">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Safety Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {safetyMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-card-foreground">{metric.metric}</p>
                    <p className="text-2xl font-bold text-card-foreground">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant="outline" 
                      className={metric.trend === "up" ? "text-success border-success" : "text-success border-success"}
                    >
                      {metric.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Document Expiry Tracking */}
          <Card className="bg-card border-border shadow-control border-warning/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <Calendar className="w-5 h-5" />
                Document Expiry Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {expiringDocuments.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-card-foreground">{doc.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.driver ? `Driver: ${doc.driver}` : `Vehicle: ${doc.vehicle}`}
                    </p>
                    <p className="text-xs text-muted-foreground">Expires: {doc.expiryDate}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${getExpiryStatusColor(doc.status)}`}>
                      {doc.daysLeft} days
                    </p>
                    <Badge className={
                      doc.status === "Critical" ? "bg-destructive text-destructive-foreground" :
                      doc.status === "Warning" ? "bg-warning text-warning-foreground" :
                      "bg-success text-success-foreground"
                    }>
                      {doc.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Violations and Incidents */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Recent Violations & Incidents
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Violation ID</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Severity</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Driver/Vehicle</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {violations.map((violation) => (
                    <tr key={violation.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4">
                        <span className="font-medium text-card-foreground">{violation.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-card-foreground">{violation.type}</p>
                          <p className="text-xs text-muted-foreground">{violation.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className={getSeverityColor(violation.severity)}>
                          {violation.severity}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-card-foreground">{violation.driver}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Truck className="w-4 h-4 text-muted-foreground" />
                            <span className="text-card-foreground">{violation.vehicle}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-card-foreground">{violation.date}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(violation.status)}>
                          {violation.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4" />
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

        {/* Compliance Action Items */}
        <Card className="bg-card border-border shadow-control border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Clock className="w-5 h-5" />
              Immediate Action Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-destructive">Critical: Medical Certificate Expiry</p>
                    <p className="text-sm text-muted-foreground">Neha Patel's medical fitness certificate expires in 23 days</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">
                  Schedule Renewal
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium text-warning">Driving Hours Violation Review</p>
                    <p className="text-sm text-muted-foreground">Ravi Kumar's driving hours violation requires management review</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Review Case
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-info/10 border border-info/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-info" />
                  <div>
                    <p className="font-medium text-info">Training Due</p>
                    <p className="text-sm text-muted-foreground">5 drivers need to complete quarterly safety training</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Send Reminders
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FleetLayout>
  );
};

export default Compliance;