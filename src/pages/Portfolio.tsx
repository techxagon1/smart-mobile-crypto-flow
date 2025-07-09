
import { motion } from "framer-motion";
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AssetList } from "@/components/portfolio/AssetList";
import { PerformanceChart } from "@/components/portfolio/PerformanceChart";

export default function Portfolio() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Portfolio</h1>
        <Button variant="ghost" size="icon">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-20">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm opacity-90">Total Balance</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              >
                {isBalanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </Button>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold">
                {isBalanceVisible ? "$12,345.67" : "••••••"}
              </div>
              
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span className="text-green-300">+5.4%</span>
                <span className="opacity-75">24h</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Allocation Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Allocation</h2>
          <div className="text-2xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-muted-foreground mb-4">Asset Allocation</div>
          
          {/* Allocation bars */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm flex-1">BTC</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-3/5 h-full bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm flex-1">ETH</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm flex-1">USDC</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-1/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <PerformanceChart />

        {/* Assets List */}
        <AssetList />
      </div>
    </motion.div>
  );
}
