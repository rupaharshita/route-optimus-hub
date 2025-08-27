import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Button } from "@/components/ui/button"
import { Search, Bell, User, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FleetLayoutProps {
  children: React.ReactNode
}

export function FleetLayout({ children }: FleetLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navigation Bar */}
          <header className="h-16 bg-card border-b border-border shadow-control flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-card-foreground hover:bg-muted" />
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles, routes, drivers..."
                  className="pl-9 bg-muted border-border text-card-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-card-foreground hover:bg-muted">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-card-foreground hover:bg-muted">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3 pl-3 border-l border-border">
                <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-card-foreground">Fleet Manager</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}