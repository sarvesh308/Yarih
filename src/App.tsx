import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ConstructionServices from "./pages/ConstructionServices";
import TutoringServices from "./pages/TutoringServices";
import WellnessServices from "./pages/WellnessServices";
import WebDevelopment from "./pages/WebDevelopment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Components
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";

const queryClient = new QueryClient();

const App = () => (
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />

          {/* Phone call button (above WhatsApp) */}
          <CallButton phone="919952636921" />

          {/* WhatsApp button (visible on all pages) */}
          <WhatsAppButton
            phone="919952636921"
            message="Hi, I need help with Yarih Group"
          />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/construction" element={<ConstructionServices />} />
            <Route path="/tutoring" element={<TutoringServices />} />
            <Route path="/wellness" element={<WellnessServices />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </UserProvider>
);

export default App;