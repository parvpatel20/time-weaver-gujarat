import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import RoadTransport from "./pages/RoadTransport";
import RailTransport from "./pages/RailTransport";
import WaterTransport from "./pages/WaterTransport";
import AirTransport from "./pages/AirTransport";
import Gallery from "./pages/Gallery";
import Archives from "./pages/Archives";
import Articles from "./pages/Articles";
import VirtualTour from "./pages/VirtualTour";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen w-full">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/road-transport" element={<RoadTransport />} />
              <Route path="/rail-transport" element={<RailTransport />} />
              <Route path="/water-transport" element={<WaterTransport />} />
              <Route path="/air-transport" element={<AirTransport />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/archives" element={<Archives />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/nh8" element={<NH8Detail />} />
            <Route path="/details/ahmedabad-junction" element={<AhmedabadJunctionDetail />} />
            <Route path="/details/kandla-port" element={<KandlaPortDetail />} />
            <Route path="/articles/gujarat-trade-gateway" element={<GujaratTradeGateway />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
