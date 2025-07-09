
import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PerformanceChart() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Performance</h2>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Portfolio Value</p>
              <p className="text-2xl font-bold">$12,345.67</p>
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">+5.4%</span>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Performance Chart</span>
          </div>
          
          {/* Time Period Buttons */}
          <div className="flex gap-2 mt-4">
            {['1H', '1D', '1W', '1M', '3M', '1Y', 'All'].map((period) => (
              <button 
                key={period}
                className={`px-3 py-1 rounded text-xs font-medium ${
                  period === '1D' 
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
