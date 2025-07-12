import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminListings from "./pages/AdminListings";
import AdminSwaps from "./pages/AdminSwaps";
import AdminReports from "./pages/AdminReports";
import AdminFeedback from "./pages/AdminFeedback";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminAnnouncements from "./pages/AdminAnnouncements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/listings" element={<AdminListings />} />
        <Route path="/admin/swaps" element={<AdminSwaps />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/announcements" element={<AdminAnnouncements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
