import { FleetLayout } from "@/components/fleet-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  Download, 
  Filter, 
  Calendar,
  FileText,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Truck,
  Users,
  Fuel,
  Shield,
  Eye,
  Share
} from "lucide-react";

const Reports = () => {
  const reportCategories = [
    {
      name: "Fleet Performance",
      icon: Truck,
      reports: [
        { name: "Vehicle Utilization Report", description: "Usage statistics and efficiency metrics", frequency: "Weekly" },
        { name: "Mileage Analysis", description: "Distance traveled and route efficiency", frequency: "Monthly" },
        { name: "Downtime Report", description: "Vehicle availability and maintenance impact", frequency: "Weekly" }
      ]
    },
    {
      name: "Financial Reports",
      icon: DollarSign,
      reports: [
        { name: "Cost per Mile Analysis", description: "Operating costs breakdown by vehicle", frequency: "Monthly" },
        { name: "Fuel Cost Report", description: "Fuel consumption and cost analysis", frequency: "Weekly" },
        { name: "ROI Dashboard", description: "Return on investment for fleet operations", frequency: "Quarterly" }
      ]
    },
    {
      name: "Driver Performance",
      icon: Users,
      reports: [
        { name: "Driver Scorecard", description: "Safety and efficiency ratings by driver", frequency: "Monthly" },
        { name: "HOS Compliance Report", description: "Hours of service compliance tracking", frequency: "Weekly" },
        { name: "Training Status Report", description: "Certification and training completion", frequency: "Quarterly" }
      ]
    },
    {
      name: "Compliance & Safety",
      icon: Shield,
      reports: [
        { name: "DOT Compliance Report", description: "Regulatory compliance status", frequency: "Monthly" },
        { name: "Incident Report", description: "Safety incidents and violation tracking", frequency: "Weekly" },
        { name: "Inspection Results", description: "Vehicle inspection outcomes", frequency: "Monthly" }
      ]
    }
  ];

  const recentReports = [
    {
      name: "February Fleet Performance Summary",
      type: "Fleet Performance",
      generatedBy: "System",
      date: "2024-03-01",
      status: "Ready",
      size: "2.4 MB"
    },
    {
      name: "Weekly Fuel Consumption Analysis",
      type: "Financial",
      generatedBy: "J. Martinez",
      date: "2024-02-29",
      status: "Ready",
      size: "1.8 MB"
    },
    {
      name: "Driver Safety Scorecard - Feb 2024",
      type: "Driver Performance",
      generatedBy: "System",
      date: "2024-02-28",
      status: "Processing",
      size: "—"
    },
    {
      name: "DOT Compliance Report - Q1 2024",
      type: "Compliance",
      generatedBy: "L. Thompson",
      date: "2024-02-27",
      status: "Ready",
      size: "3.2 MB"
    }
  ];

  const kpiSummary = [
    { 
      metric: "Total Fleet Cost", 
      value: "$284,500", 
      change: "-2.3%", 
      trend: "down",
      period: "This Month"
    },
    { 
      metric: "Average MPG", 
      value: "6.8", 
      change: "+0.4", 
      trend: "up",
      period: "Fleet Average"
    },
    { 
      metric: "Utilization Rate", 
      value: "87.3%", 
      change: "+3.1%", 
      trend: "up",
      period: "This Month"
    },
    { 
      metric: "Safety Score", 
      value: "96.2", 
      change: "+1.8", 
      trend: "up",
      period: "Fleet Average"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-success text-success-foreground";
      case "Processing":
        return "bg-warning text-warning-foreground";
      case "Failed":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-success" : "text-destructive";
  };

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? TrendingUp : TrendingDown;
  };

  return (
    <FleetLayout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              Reports & Analytics
            </h1>
            <p className="text-muted-foreground mt-1">
              Generate comprehensive reports and analyze fleet performance metrics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-glow">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* KPI Summary */}
        <div className="grid gap-4 md:grid-cols-4">
          {kpiSummary.map((kpi, index) => {
            const TrendIcon = getTrendIcon(kpi.trend);
            return (
              <Card key={index} className="bg-card border-border shadow-control">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{kpi.metric}</p>
                    <TrendIcon className={`w-4 h-4 ${getTrendColor(kpi.trend)}`} />
                  </div>
                  <p className="text-2xl font-bold text-card-foreground">{kpi.value}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                      {kpi.change}
                    </span>
                    <span className="text-xs text-muted-foreground">{kpi.period}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Report Generator */}
        <Card className="bg-card border-border shadow-control">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Generate New Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fleet-performance">Fleet Performance</SelectItem>
                      <SelectItem value="financial">Financial Analysis</SelectItem>
                      <SelectItem value="driver">Driver Performance</SelectItem>
                      <SelectItem value="compliance">Compliance Report</SelectItem>
                      <SelectItem value="custom">Custom Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 days</SelectItem>
                      <SelectItem value="last-month">Last month</SelectItem>
                      <SelectItem value="last-quarter">Last quarter</SelectItem>
                      <SelectItem value="last-year">Last year</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicles">Vehicles</Label>
                  <Select>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select vehicles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All vehicles</SelectItem>
                      <SelectItem value="active">Active vehicles only</SelectItem>
                      <SelectItem value="specific">Specific vehicles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="format">Export Format</Label>
                  <Select>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Report</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV Data</SelectItem>
                      <SelectItem value="dashboard">Interactive Dashboard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipients">Email Recipients</Label>
                  <Input
                    id="recipients"
                    placeholder="Enter email addresses"
                    className="bg-muted border-border"
                  />
                </div>
                
                <Button className="w-full bg-gradient-secondary text-secondary-foreground">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Report Categories */}
          <div className="lg:col-span-2 space-y-6">
            {reportCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border shadow-control">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="w-5 h-5 text-primary" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.reports.map((report, reportIndex) => (
                      <div key={reportIndex} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground">{report.name}</h4>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {report.frequency}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Reports */}
          <div>
            <Card className="bg-card border-border shadow-control">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Recent Reports
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-card-foreground text-sm">{report.name}</h4>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>Type: {report.type}</p>
                      <p>Generated by: {report.generatedBy}</p>
                      <p>Date: {report.date}</p>
                      <p>Size: {report.size}</p>
                    </div>
                    
                    {report.status === "Ready" && (
                      <div className="flex items-center gap-2 mt-3">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="w-3 h-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border-border shadow-control mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 grid-cols-2">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-lg font-bold text-card-foreground">47</p>
                    <p className="text-xs text-muted-foreground">Reports Generated</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-lg font-bold text-card-foreground">12</p>
                    <p className="text-xs text-muted-foreground">Scheduled Reports</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-lg font-bold text-card-foreground">89%</p>
                    <p className="text-xs text-muted-foreground">Automation Rate</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-lg font-bold text-card-foreground">24h</p>
                    <p className="text-xs text-muted-foreground">Avg Generation</p>
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

export default Reports;