
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Wallet, 
  ArrowUpDown, 
  Bitcoin, 
  Bot, 
  Bell, 
  Settings 
} from "lucide-react";

const navItems = [
  { id: "portfolio", label: "Portfolio", icon: Wallet, path: "/" },
  { id: "transactions", label: "Transactions", icon: ArrowUpDown, path: "/transactions" },
  { id: "bitcoin", label: "Bitcoin", icon: Bitcoin, path: "/bitcoin" },
  { id: "automation", label: "Automation", icon: Bot, path: "/automation" },
  { id: "notifications", label: "Notifications", icon: Bell, path: "/notifications" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="grid grid-cols-6 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
