
import { motion, AnimatePresence } from "framer-motion";
import { useNavigationStore } from "@/store/navigationStore";
import { BottomNavigation } from "./layout/BottomNavigation";
import { PortfolioView } from "./views/PortfolioView";
import { TransactionsView } from "./views/TransactionsView";
import { BitcoinView } from "./views/BitcoinView";
import { AutomationView } from "./views/AutomationView";
import { NotificationsView } from "./views/NotificationsView";
import { SettingsView } from "./views/SettingsView";

export function MainApp() {
  const { currentView } = useNavigationStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'portfolio':
        return <PortfolioView />;
      case 'transactions':
        return <TransactionsView />;
      case 'bitcoin':
        return <BitcoinView />;
      case 'automation':
        return <AutomationView />;
      case 'notifications':
        return <NotificationsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <PortfolioView />;
    }
  };

  const shouldHideNav = currentView === 'bitcoin';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>
      {!shouldHideNav && <BottomNavigation />}
    </div>
  );
}
