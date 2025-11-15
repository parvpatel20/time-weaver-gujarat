import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from "react-router-dom";
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
import Questionnaire from "./pages/Questionnaire";
// import VirtualTour from "./pages/VirtualTour";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NH8Detail from "./pages/details/NH8Detail";
import AhmedabadJunctionDetail from "./pages/details/AhmedabadJunctionDetail";
import KandlaPortDetail from "./pages/details/KandlaPortDetail";
import GujaratTradeGateway from "./pages/articles/GujaratTradeGateway";
import GSRTCDetail from "./pages/details/GSRTCDetail";
import MundraPortDetail from "./pages/details/MundraPortDetail";
import VadodaraJunctionDetail from "./pages/details/VadodaraJunctionDetail";
import SVPIAirportDetail from "./pages/details/SVPIAirportDetail";
import NH44Detail from "./pages/details/NH44Detail";
import MAEDetail from "./pages/details/MAEDetail";
import PipavavPortDetail from "./pages/details/PipavavPortDetail";
import BhavnagarPortDetail from "./pages/details/BhavnagarPortDetail";
import SuratAirportDetail from "./pages/details/SuratAirportDetail";
import VadodaraAirportDetail from "./pages/details/VadodaraAirportDetail";
import RajkotAirportDetail from "./pages/details/RajkotAirportDetail";
import SuratRailwayStationDetail from "./pages/details/SuratRailwayStationDetail";
import RajkotJunctionDetail from "./pages/details/RajkotJunctionDetail";

const queryClient = new QueryClient();

// Layout keeps Navigation persistent and renders route children via <Outlet />
const Layout = () => (
  <div className="min-h-screen w-full">
    <Navigation />
    <Outlet />
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="road-transport" element={<RoadTransport />} />
        <Route path="rail-transport" element={<RailTransport />} />
        <Route path="water-transport" element={<WaterTransport />} />
        <Route path="air-transport" element={<AirTransport />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="archives" element={<Archives />} />
        <Route path="articles" element={<Articles />} />
        {/* <Route path="virtual-tour" element={<VirtualTour />} /> */}
        <Route path="quiz" element={<Quiz />} />
        <Route path="about" element={<About />} />
  <Route path="questionnaire" element={<Questionnaire />} />
        <Route path="details/nh8" element={<NH8Detail />} />
  <Route path="details/nh44" element={<NH44Detail />} />
        <Route path="details/ahmedabad-junction" element={<AhmedabadJunctionDetail />} />
          <Route path="details/surat-railway-station" element={<SuratRailwayStationDetail />} />
          <Route path="details/rajkot-junction" element={<RajkotJunctionDetail />} />
  <Route path="details/mae" element={<MAEDetail />} />
        <Route path="details/vadodara-junction" element={<VadodaraJunctionDetail />} />
  <Route path="details/kandla-port" element={<KandlaPortDetail />} />
  <Route path="details/mundra-port" element={<MundraPortDetail />} />
  <Route path="details/pipavav-port" element={<PipavavPortDetail />} />
  <Route path="details/bhavnagar-port" element={<BhavnagarPortDetail />} />
        <Route path="details/gsrtc" element={<GSRTCDetail />} />
  <Route path="details/svpi-airport" element={<SVPIAirportDetail />} />
  <Route path="details/surat-airport" element={<SuratAirportDetail />} />
  <Route path="details/vadodara-airport" element={<VadodaraAirportDetail />} />
  <Route path="details/rajkot-airport" element={<RajkotAirportDetail />} />
  <Route path="details/mumbai-ahmedabad-line" element={<NH8Detail />} />
  <Route path="details/ahmedabad-vadodara-bombay" element={<VadodaraJunctionDetail />} />
        <Route path="details/svpi-airport" element={<SVPIAirportDetail />} />
  <Route path="articles/gujarat-trade-gateway" element={<GujaratTradeGateway />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  ),
  {
    future: { v7_startTransition: true },
  },
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
