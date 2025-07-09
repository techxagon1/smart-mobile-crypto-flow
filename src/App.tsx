
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MainApp } from "./components/MainApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="wallet-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MainApp />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
