import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vehicles from "./pages/Vehicles";
import Maintenance from "./pages/Maintenance";
import RouteOptimization from "./pages/RouteOptimization";
import Drivers from "./pages/Drivers";
import Tracking from "./pages/Tracking";
import Fuel from "./pages/Fuel";
import Compliance from "./pages/Compliance";
import Integrations from "./pages/Integrations";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/routes" element={<RouteOptimization />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/fuel" element={<Fuel />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/reports" element={<Reports />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
