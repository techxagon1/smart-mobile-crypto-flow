
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTransactions } from "@/hooks/useTransactions";

export function TransactionsView() {
  const { data: transactions, isLoading, error } = useTransactions();

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'receive': return '↓';
      case 'send': return '↑';
      case 'swap': return '⇄';
      case 'buy': return '+';
      case 'sell': return '-';
      default: return '•';
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'receive': return 'text-green-500';
      case 'send': return 'text-red-500';
      case 'swap': return 'text-blue-500';
      case 'buy': return 'text-green-500';
      case 'sell': return 'text-orange-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Transactions</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        {/* Search and Filters */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Asset <ChevronDown className="w-3 h-3" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Date <ChevronDown className="w-3 h-3" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Type <ChevronDown className="w-3 h-3" />
          </Button>
        </div>

        {/* Transactions */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>
          
          {isLoading ? (
            <Card>
              <CardContent className="p-0">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className={`p-4 flex items-center gap-3 ${index < 4 ? 'border-b' : ''}`}>
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-32 mb-1" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <div className="text-right">
                      <Skeleton className="h-4 w-16 mb-1" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ) : error ? (
            <Card>
              <CardContent className="p-4 text-center text-muted-foreground">
                Failed to load transactions. Please try again.
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-0">
                {transactions?.map((transaction, index) => (
                  <div 
                    key={transaction.id} 
                    className={`p-4 flex items-center gap-3 ${index < transactions.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${getTransactionColor(transaction.type)}`}>
                      <span className="text-lg font-semibold">{getTransactionIcon(transaction.type)}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium capitalize">{transaction.type} {transaction.asset}</p>
                      <p className="text-sm text-muted-foreground">{transaction.timestamp}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{transaction.value}</p>
                      <p className="text-sm text-muted-foreground">{transaction.amount}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-500' :
                      transaction.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
