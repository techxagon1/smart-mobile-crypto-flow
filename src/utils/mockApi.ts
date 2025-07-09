
// Mock API functions that simulate real data fetching
export interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: string;
  price: number;
  change24h: number;
  color: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'buy' | 'sell';
  asset: string;
  amount: string;
  value: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface PortfolioData {
  totalBalance: number;
  change24h: number;
  assets: Asset[];
}

export interface PerformanceData {
  period: string;
  value: number;
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  type: 'price_alert' | 'automation' | 'strategy' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// Mock data
const mockAssets: Asset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.25846 BTC",
    value: "$25,000",
    price: 30250,
    change24h: 2.5,
    color: "text-orange-500"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "5.8523 ETH",
    value: "$5,800",
    price: 1800,
    change24h: -1.2,
    color: "text-blue-500"
  },
  {
    symbol: "SUI",
    name: "Sui",
    balance: "1,500 SUI",
    value: "$1,200",
    price: 0.8,
    change24h: 5.4,
    color: "text-cyan-500"
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "1,000 USDC",
    value: "$1,000",
    price: 1.0,
    change24h: 0.0,
    color: "text-green-500"
  }
];

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "receive",
    asset: "BTC",
    amount: "0.1 BTC",
    value: "$3,025",
    timestamp: "2 hours ago",
    status: "completed"
  },
  {
    id: "2",
    type: "send",
    asset: "ETH",
    amount: "2.5 ETH",
    value: "$4,500",
    timestamp: "1 day ago",
    status: "completed"
  },
  {
    id: "3",
    type: "swap",
    asset: "SUI",
    amount: "500 SUI → 0.4 ETH",
    value: "$720",
    timestamp: "2 days ago",
    status: "completed"
  },
  {
    id: "4",
    type: "buy",
    asset: "USDC",
    amount: "500 USDC",
    value: "$500",
    timestamp: "3 days ago",
    status: "pending"
  }
];

const mockNotifications: NotificationItem[] = [
  {
    id: "1",
    type: "price_alert",
    title: "Bitcoin price dropped to $29,500",
    message: "BTC/USD reached your price alert threshold",
    timestamp: "2 minutes ago",
    read: false
  },
  {
    id: "2",
    type: "automation",
    title: "DCA strategy executed",
    message: "Purchased $100 worth of ETH automatically",
    timestamp: "1 hour ago",
    read: false
  },
  {
    id: "3",
    type: "strategy",
    title: "Rebalancing completed",
    message: "Portfolio rebalanced according to your strategy",
    timestamp: "2 hours ago",
    read: true
  }
];

// Mock API functions with realistic delays
export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const totalBalance = mockAssets.reduce((sum, asset) => 
    sum + parseFloat(asset.value.replace('$', '').replace(',', '')), 0
  );
  
  return {
    totalBalance,
    change24h: 5.4,
    assets: mockAssets
  };
};

export const fetchTransactions = async (): Promise<Transaction[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return mockTransactions;
};

export const fetchAssetDetails = async (symbol: string): Promise<Asset | null> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockAssets.find(asset => asset.symbol === symbol) || null;
};

export const fetchPerformanceData = async (period: string): Promise<PerformanceData[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate mock performance data
  const dataPoints = 30;
  const baseValue = 12345.67;
  const data: PerformanceData[] = [];
  
  for (let i = 0; i < dataPoints; i++) {
    const variation = (Math.random() - 0.5) * 1000;
    data.push({
      period,
      value: baseValue + variation,
      timestamp: new Date(Date.now() - (dataPoints - i) * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  
  return data;
};

export const fetchNotifications = async (): Promise<NotificationItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockNotifications;
};
