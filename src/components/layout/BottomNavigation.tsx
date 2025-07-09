
import { motion } from "framer-motion";
import { 
  Wallet, 
  ArrowUpDown, 
  Bitcoin, 
  Bot, 
  Bell, 
  Settings 
} from "lucide-react";
import { useNavigationStore } from "@/store/navigationStore";

const navItems = [
  { id: "portfolio", label: "Portfolio", icon: Wallet },
  { id: "transactions", label: "Transactions", icon: ArrowUpDown },
  { id: "bitcoin", label: "Bitcoin", icon: Bitcoin },
  { id: "automation", label: "Automation", icon: Bot },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

export function BottomNavigation() {
  const { currentView, setCurrentView } = useNavigationStore();

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className="flex flex-col items-center justify-center relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-lg m-1"
                  transition={{ duration: 0.3 }}
                />
              )}
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-1 p-2 relative z-10"
              >
                <item.icon 
                  className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} 
                />
                <span 
                  className={`text-xs font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {item.label}
                </span>
              </motion.div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
