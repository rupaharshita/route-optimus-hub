import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Truck,
  Wrench,
  Route,
  Users,
  MapPin,
  Fuel,
  Shield,
  Settings,
  BarChart3,
  Search,
  Bell,
  User
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Vehicles", url: "/vehicles", icon: Truck },
  { title: "Maintenance", url: "/maintenance", icon: Wrench, alerts: 3 },
  { title: "Routes", url: "/routes", icon: Route },
  { title: "Drivers", url: "/drivers", icon: Users },
  { title: "Tracking", url: "/tracking", icon: MapPin },
  { title: "Fuel", url: "/fuel", icon: Fuel },
  { title: "Compliance", url: "/compliance", icon: Shield, alerts: 1 },
  { title: "Integrations", url: "/integrations", icon: Settings },
  { title: "Reports", url: "/reports", icon: BarChart3 },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-sidebar shadow-elevation transition-all duration-300`}>
      <SidebarContent className="bg-sidebar">
        {/* Header */}
        <div className={`p-4 border-b border-sidebar-border ${collapsed ? 'px-2' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Truck className="w-4 h-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">Nomadalle</h2>
                <p className="text-xs text-sidebar-foreground/70">Fleet Control Tower</p>
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        {!collapsed && (
          <div className="p-4 border-b border-sidebar-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search fleet..."
                className="pl-9 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        )}

        <SidebarGroup className="px-2">
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-medium uppercase tracking-wider">
            {!collapsed && "Fleet Operations"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group">
                    <NavLink
                      to={item.url}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive(item.url)
                          ? "bg-sidebar-accent text-sidebar-primary shadow-control"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      } ${collapsed ? 'justify-center' : ''}`}
                    >
                      <item.icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0`} />
                      {!collapsed && (
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm font-medium">{item.title}</span>
                          {item.alerts && (
                            <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                              {item.alerts}
                            </Badge>
                          )}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-secondary-foreground" />
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Fleet Manager</p>
                <p className="text-xs text-sidebar-foreground/70 truncate">manager@nomadalle.com</p>
              </div>
            )}
            {!collapsed && (
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                <Bell className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}