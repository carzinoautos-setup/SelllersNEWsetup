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
import YourListings from "./pages/yourlistings";
import BuyCredits from "./pages/buy-credits";
import Checkout from "./pages/checkout";
import Billing from "./pages/billing";
import Logout from "./pages/logout";
import Messages from "./pages/messages";
import AddAListing from "./pages/add-a-listing";
import EditListing from "./pages/edit-listing";
import Production from "./pages/production";
import Elements from "./pages/elements";
import Vindecoder from "./pages/vindecoder";
import StartVindecoder from "./pages/start-vindecoder";
import SuccessUploaded from "./pages/success-uploaded";
import ApplyCredits from "./pages/apply-credits";
import FeatureMycar from "./pages/feature-mycar";
import ChangeStatus from "./pages/change-status";
import RemoveListing from "./pages/remove-listing";
import RemoveListingConfirmed from "./pages/remove-listing-confirmed";
import Login1 from "./pages/login-1";
import LogInLogOut from "./pages/log-in-log-out";

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
          <Route path="/yourlistings" element={<YourListings />} />
          <Route path="/buy-credits" element={<BuyCredits />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-a-listing" element={<AddAListing />} />
          <Route path="/start-vindecoder" element={<StartVindecoder />} />
          <Route path="/edit-listing" element={<EditListing />} />
          <Route path="/apply-credits" element={<ApplyCredits />} />
          <Route path="/feature-mycar" element={<FeatureMycar />} />
          <Route path="/change-status" element={<ChangeStatus />} />
          <Route path="/success-uploaded" element={<SuccessUploaded />} />
          <Route path="/remove-listing" element={<RemoveListing />} />
          <Route
            path="/remove-listing-confirmed"
            element={<RemoveListingConfirmed />}
          />
          <Route path="/production" element={<Production />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/vindecoder" element={<Vindecoder />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/login-1" element={<Login1 />} />
          <Route path="/log-in-log-out" element={<LogInLogOut />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

(function () {
  const container = document.getElementById("root");
  if (!container) return;
  const w = window as any;
  if (!w.__REACT_ROOT__) {
    w.__REACT_ROOT__ = createRoot(container);
  }
  w.__REACT_ROOT__.render(<App />);
})();
