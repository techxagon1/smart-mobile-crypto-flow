
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Wallet, Zap, Settings, TrendingUp, Shield, Bot } from "lucide-react";

interface WalletSidebarProps {
  activeView: 'wallet' | 'automation' | 'settings';
  setActiveView: (view: 'wallet' | 'automation' | 'settings') => void;
}

export function WalletSidebar({ activeView, setActiveView }: WalletSidebarProps) {
  const menuItems = [
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'automation', label: 'Smart Automation', icon: Bot },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <Sidebar side="left" variant="floating" className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <h1 className="font-bold text-lg">CryptoFlow</h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                isActive={activeView === item.id}
                onClick={() => setActiveView(item.id as any)}
                className="w-full justify-start"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
