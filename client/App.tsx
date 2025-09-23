import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UsresProfile from "./pages/usresprofile";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/NotFound";
import Reset from "./pages/reset";
import AddAListing from "./pages/add-a-listing";
import YourListings from "./pages/yourlistings";
import BuyCredits from "./pages/buy-credits";
import Checkout from "./pages/checkout";
import Billing from "./pages/billing";
import Logout from "./pages/logout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<UsresProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/add-a-listing" element={<AddAListing />} />
          <Route path="/yourlistings" element={<YourListings />} />
          <Route path="/buy-credits" element={<BuyCredits />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout" element={<Logout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
