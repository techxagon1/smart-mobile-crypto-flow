
import { ArrowUpRight, ArrowDownLeft, Repeat, Bitcoin, Ethereum } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  timestamp: string;
  address?: string;
}

export function TransactionList() {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'receive',
      amount: 0.5,
      currency: 'BTC',
      status: 'completed',
      timestamp: '2 hours ago',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
    },
    {
      id: '2',
      type: 'send',
      amount: 2.5,
      currency: 'ETH',
      status: 'completed',
      timestamp: '5 hours ago',
      address: '0x742d35cc6634c0532925a3b8d9e47f2b4b6b5982'
    },
    {
      id: '3',
      type: 'swap',
      amount: 1000,
      currency: 'USDT',
      status: 'pending',
      timestamp: '8 hours ago'
    },
    {
      id: '4',
      type: 'receive',
      amount: 5.2,
      currency: 'ETH',
      status: 'completed',
      timestamp: '1 day ago',
      address: '0x8ba1f109551bd432803012645hac136c34824bad'
    }
  ];

  const getTransactionIcon = (type: string, currency: string) => {
    if (type === 'send') return <ArrowUpRight className="w-4 h-4 text-red-500" />;
    if (type === 'receive') return <ArrowDownLeft className="w-4 h-4 text-green-500" />;
    if (type === 'swap') return <Repeat className="w-4 h-4 text-blue-500" />;
    return <Bitcoin className="w-4 h-4" />;
  };

  const getCurrencyIcon = (currency: string) => {
    if (currency === 'BTC') return <Bitcoin className="w-6 h-6 text-orange-500" />;
    if (currency === 'ETH') return <Ethereum className="w-6 h-6 text-blue-500" />;
    return <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white">{currency[0]}</div>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                {getCurrencyIcon(transaction.currency)}
                <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                  {getTransactionIcon(transaction.type, transaction.currency)}
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium capitalize">{transaction.type}</span>
                  <Badge variant={transaction.status === 'completed' ? 'default' : transaction.status === 'pending' ? 'secondary' : 'destructive'}>
                    {transaction.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{transaction.timestamp}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-semibold">
                {transaction.type === 'send' ? '-' : '+'}{transaction.amount} {transaction.currency}
              </div>
              <div className="text-sm text-muted-foreground">
                ${(transaction.amount * (transaction.currency === 'BTC' ? 45000 : transaction.currency === 'ETH' ? 2800 : 1)).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
