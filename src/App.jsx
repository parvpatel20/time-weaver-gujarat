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
import LothalDetail from "./pages/details/LothalDetail";
import SVPIAirportDetail from "./pages/details/SVPIAirportDetail";
import ArticleSabarmatiRiverfront from "./pages/details/ArticleSabarmatiRiverfront";
import ArticleMetroRail from "./pages/details/ArticleMetroRail";
import ArticleGoldenQuadrilateral from "./pages/details/ArticleGoldenQuadrilateral";
import ArticleGreenPorts from "./pages/details/ArticleGreenPorts";
import ArticleUdanScheme from "./pages/details/ArticleUdanScheme";
import NH44Detail from "./pages/details/NH44Detail";
import MAEDetail from "./pages/details/MAEDetail";
import GujaratBroadGaugeDetail from "./pages/details/GujaratBroadGaugeDetail";
import WesternDFCDetail from "./pages/details/WesternDFCDetail";
import PipavavPortDetail from "./pages/details/PipavavPortDetail";
import BhavnagarPortDetail from "./pages/details/BhavnagarPortDetail";
import SuratAirportDetail from "./pages/details/SuratAirportDetail";
import VadodaraAirportDetail from "./pages/details/VadodaraAirportDetail";
import RajkotAirportDetail from "./pages/details/RajkotAirportDetail";

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
        <Route path="details/nh8" element={<NH8Detail />} />
  <Route path="details/nh44" element={<NH44Detail />} />
        <Route path="details/ahmedabad-junction" element={<AhmedabadJunctionDetail />} />
  <Route path="details/mae" element={<MAEDetail />} />
        <Route path="details/vadodara-junction" element={<VadodaraJunctionDetail />} />
  <Route path="details/kandla-port" element={<KandlaPortDetail />} />
  <Route path="details/mundra-port" element={<MundraPortDetail />} />
  <Route path="details/pipavav-port" element={<PipavavPortDetail />} />
  <Route path="details/bhavnagar-port" element={<BhavnagarPortDetail />} />
        <Route path="details/gsrtc" element={<GSRTCDetail />} />
  <Route path="details/lothal" element={<LothalDetail />} />
  <Route path="details/svpi-airport" element={<SVPIAirportDetail />} />
  <Route path="details/surat-airport" element={<SuratAirportDetail />} />
  <Route path="details/vadodara-airport" element={<VadodaraAirportDetail />} />
  <Route path="details/rajkot-airport" element={<RajkotAirportDetail />} />
  <Route path="details/mumbai-ahmedabad-line" element={<NH8Detail />} />
  <Route path="details/ahmedabad-vadodara-bombay" element={<VadodaraJunctionDetail />} />
  <Route path="details/gujarat-broad-gauge" element={<GujaratBroadGaugeDetail />} />
  <Route path="details/western-dfc" element={<WesternDFCDetail />} />
        <Route path="details/svpi-airport" element={<SVPIAirportDetail />} />
        <Route path="articles/gujarat-trade-gateway" element={<GujaratTradeGateway />} />
        <Route path="articles/sabarmati-riverfront" element={<ArticleSabarmatiRiverfront />} />
        <Route path="articles/metro-rail" element={<ArticleMetroRail />} />
        <Route path="articles/golden-quadrilateral" element={<ArticleGoldenQuadrilateral />} />
        <Route path="articles/green-ports" element={<ArticleGreenPorts />} />
        <Route path="articles/udan-scheme" element={<ArticleUdanScheme />} />
        
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
