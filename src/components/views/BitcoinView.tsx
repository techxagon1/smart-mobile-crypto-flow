
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useNavigationStore } from "@/store/navigationStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function BitcoinView() {
  const { setCurrentView } = useNavigationStore();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => setCurrentView('portfolio')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold">Bitcoin</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Price Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">₿</span>
                </div>
                <span className="font-semibold">Bitcoin</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">$30,250</div>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>+2.5%</span>
                </div>
              </div>
            </div>
            
            {/* Price Chart Placeholder */}
            <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Price Chart</span>
            </div>
          </CardContent>
        </Card>

        {/* Market Trends */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Market Trends</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Market Cap</span>
              <span className="font-medium">$590B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Circulating Supply</span>
              <span className="font-medium">19.84M BTC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Supply</span>
              <span className="font-medium">21M BTC</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-12">Buy Bitcoin</Button>
          <Button variant="outline" className="h-12">Sell Bitcoin</Button>
        </div>
      </div>
    </div>
  );
}
