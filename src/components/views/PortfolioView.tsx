
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AssetList } from "@/components/portfolio/AssetList";
import { PerformanceChart } from "@/components/portfolio/PerformanceChart";
import { usePortfolio } from "@/hooks/usePortfolio";

export function PortfolioView() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const { data: portfolioData, isLoading, error } = usePortfolio();
  
  return (
    <div className="flex flex-col h-full">
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
                {isLoading ? (
                  <Skeleton className="h-9 w-40 bg-primary-foreground/20" />
                ) : isBalanceVisible ? (
                  `$${portfolioData?.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                ) : (
                  "••••••"
                )}
              </div>
              
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-300" />
                {isLoading ? (
                  <Skeleton className="h-4 w-12 bg-primary-foreground/20" />
                ) : (
                  <>
                    <span className="text-green-300">+{portfolioData?.change24h}%</span>
                    <span className="opacity-75">24h</span>
                  </>
                )}
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
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-center gap-3">
                  <Skeleton className="w-3 h-3 rounded-full" />
                  <Skeleton className="h-4 w-8 flex-1" />
                  <Skeleton className="w-24 h-2 rounded-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {portfolioData?.assets.slice(0, 3).map((asset, index) => {
                const percentage = Math.floor(Math.random() * 40) + 20; // Mock percentage
                return (
                  <div key={asset.symbol} className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${asset.color.replace('text-', 'bg-')} rounded-full`}></div>
                    <span className="text-sm flex-1">{asset.symbol}</span>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${asset.color.replace('text-', 'bg-')} rounded-full`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Performance Chart */}
        <PerformanceChart />

        {/* Assets List */}
        <AssetList />

        {error && (
          <Card className="border-destructive">
            <CardContent className="p-4 text-center text-destructive">
              Failed to load portfolio data. Please try again.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
