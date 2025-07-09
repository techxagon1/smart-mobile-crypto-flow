
import { motion } from "framer-motion";
import { Bell, TrendingUp, TrendingDown, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "price_alert",
      title: "Bitcoin price dropped to $29,500",
      message: "BTC/USD",
      time: "2m ago",
      icon: TrendingDown,
      color: "text-red-500"
    },
    {
      id: 2,
      type: "automation",
      title: "Ethereum price increased to $1,800",
      message: "ETH/USD",
      time: "5m ago",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      id: 3,
      type: "strategy",
      title: "Solana price increased to $20",
      message: "SOL/USD",
      time: "1h ago",
      icon: TrendingUp,
      color: "text-green-500"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Today</h2>
          <Badge variant="secondary">3</Badge>
        </div>

        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${notification.color}`}>
                  <notification.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="pt-4">
          <h3 className="text-lg font-semibold mb-4">Yesterday</h3>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Bell className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Launch price increased to $50</p>
                  <p className="text-sm text-muted-foreground">L2/USD</p>
                  <p className="text-xs text-muted-foreground mt-1">1d ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
