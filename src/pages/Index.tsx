
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { WalletSidebar } from "@/components/wallet/WalletSidebar";
import { WalletHeader } from "@/components/wallet/WalletHeader";
import { WalletBalance } from "@/components/wallet/WalletBalance";
import { QuickActions } from "@/components/wallet/QuickActions";
import { TransactionList } from "@/components/wallet/TransactionList";
import { AutomationPanel } from "@/components/wallet/AutomationPanel";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeView, setActiveView] = useState<'wallet' | 'automation' | 'settings'>('wallet');
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider defaultOpen={false}>
        <div className="flex h-screen">
          <WalletSidebar activeView={activeView} setActiveView={setActiveView} />
          
          <main className="flex-1 flex flex-col overflow-hidden">
            <WalletHeader />
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {activeView === 'wallet' && (
                <>
                  <WalletBalance />
                  <QuickActions />
                  <TransactionList />
                </>
              )}
              
              {activeView === 'automation' && (
                <AutomationPanel />
              )}
              
              {activeView === 'settings' && (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                  <p className="text-muted-foreground">Wallet settings coming soon...</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
