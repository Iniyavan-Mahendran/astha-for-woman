import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import all critical pages
import Rights from './pages/Rights';
import DomesticLaws from './pages/rights/DomesticLaws';
import PropertyRights from './pages/rights/PropertyRights';
import WorkplaceSafety from './pages/rights/WorkplaceSafety';
import CyberSafety from './pages/rights/CyberSafety';
import Helpline from './pages/rights/Helpline';
import SupportUs from './pages/SupportUs';
import GetHelp from './pages/GetHelp';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/rights" element={<Rights />} />
            <Route path="/rights/domestic-laws" element={<DomesticLaws />} />
            <Route path="/rights/property-rights" element={<PropertyRights />} />
            <Route path="/rights/workplace-safety" element={<WorkplaceSafety />} />
            <Route path="/rights/cyber-safety" element={<CyberSafety />} />
            <Route path="/rights/helpline" element={<Helpline />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/get-help" element={<GetHelp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppFloatButton />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
