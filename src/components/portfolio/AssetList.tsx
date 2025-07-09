
import { Bitcoin, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AssetList() {
  const assets = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      icon: Bitcoin,
      balance: "0.25846 BTC",
      value: "$25,000",
      color: "text-orange-500"
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      icon: Coins,
      balance: "5.8523 ETH",
      value: "$5,800",
      color: "text-blue-500"
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      icon: Coins,
      balance: "1,000 USDC",
      value: "$1,000",
      color: "text-green-500"
    }
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Assets</h2>
      <Card>
        <CardContent className="p-0">
          {assets.map((asset, index) => (
            <div 
              key={asset.symbol} 
              className={`p-4 flex items-center justify-between ${index < assets.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center gap-3">
                <asset.icon className={`w-8 h-8 ${asset.color}`} />
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
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
