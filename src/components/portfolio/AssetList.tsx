
import { Bitcoin, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolio } from "@/hooks/usePortfolio";

export function AssetList() {
  const { data: portfolioData, isLoading, error } = usePortfolio();

  if (isLoading) {
    return (
      <div>
        <h2 className="text-lg font-semibold mb-3">Assets</h2>
        <Card>
          <CardContent className="p-0">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className={`p-4 flex items-center justify-between ${index < 4 ? 'border-b' : ''}`}>
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
                <div className="text-right">
                  <Skeleton className="h-4 w-16 mb-1" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-lg font-semibold mb-3">Assets</h2>
        <Card>
          <CardContent className="p-4 text-center text-muted-foreground">
            Failed to load assets. Please try again.
          </CardContent>
        </Card>
      </div>
    );
  }

  const getAssetIcon = (symbol: string) => {
    return symbol === 'BTC' ? Bitcoin : Coins;
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Assets</h2>
      <Card>
        <CardContent className="p-0">
          {portfolioData?.assets.map((asset, index) => {
            const IconComponent = getAssetIcon(asset.symbol);
            return (
              <div 
                key={asset.symbol} 
                className={`p-4 flex items-center justify-between ${index < portfolioData.assets.length - 1 ? 'border-b' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className={`w-8 h-8 ${asset.color}`} />
                  <div>
                    <p className="font-medium">{asset.name}</p>
                    <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{asset.value}</p>
                  <p className="text-sm text-muted-foreground">{asset.balance}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
