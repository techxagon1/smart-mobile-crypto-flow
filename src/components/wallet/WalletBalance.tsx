
import { useState } from "react";
import { Eye, EyeOff, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function WalletBalance() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  
  const totalBalance = 12547.89;
  const percentageChange = 5.4;
  const isPositive = percentageChange > 0;

  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium opacity-90">Total Balance</h2>
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
            {isBalanceVisible ? `$${totalBalance.toLocaleString()}` : '••••••'}
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-300" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-300" />
            )}
            <span className={isPositive ? 'text-green-300' : 'text-red-300'}>
              {isPositive ? '+' : ''}{percentageChange}%
            </span>
            <span className="opacity-75">24h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
