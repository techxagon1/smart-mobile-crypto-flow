
import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolio, usePerformanceData } from "@/hooks/usePortfolio";
import { useState } from "react";

export function PerformanceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('1D');
  const { data: portfolioData, isLoading: portfolioLoading } = usePortfolio();
  const { data: performanceData, isLoading: performanceLoading } = usePerformanceData(selectedPeriod);

  const isLoading = portfolioLoading || performanceLoading;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Performance</h2>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <p className="text-2xl font-bold">
                  ${portfolioData?.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <TrendingUp className="w-4 h-4" />
              {isLoading ? (
                <Skeleton className="h-4 w-12" />
              ) : (
                <span className="font-medium">+{portfolioData?.change24h}%</span>
              )}
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
            {isLoading ? (
              <Skeleton className="h-full w-full" />
            ) : (
              <span className="text-muted-foreground">Performance Chart ({performanceData?.length} data points)</span>
            )}
          </div>
          
          {/* Time Period Buttons */}
          <div className="flex gap-2 mt-4">
            {['1H', '1D', '1W', '1M', '3M', '1Y', 'All'].map((period) => (
              <button 
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded text-xs font-medium ${
                  period === selectedPeriod 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
