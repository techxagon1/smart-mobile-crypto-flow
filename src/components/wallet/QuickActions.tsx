
import { Send, Download, Repeat, CreditCard, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function QuickActions() {
  const actions = [
    { icon: Send, label: 'Send', color: 'bg-blue-500' },
    { icon: Download, label: 'Receive', color: 'bg-green-500' },
    { icon: Repeat, label: 'Swap', color: 'bg-purple-500' },
    { icon: CreditCard, label: 'Buy', color: 'bg-orange-500' },
    { icon: Zap, label: 'Auto Trade', color: 'bg-yellow-500' },
    { icon: TrendingUp, label: 'Invest', color: 'bg-pink-500' },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-20 flex-col gap-2 hover:bg-muted"
            >
              <div className={`w-10 h-10 rounded-full ${action.color} flex items-center justify-center`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
