
import { useState } from "react";
import { Bot, TrendingUp, Shield, Zap, Plus, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

interface AutomationRule {
  id: string;
  name: string;
  description: string;
  type: 'dca' | 'stop_loss' | 'rebalance' | 'yield';
  isActive: boolean;
  performance: string;
}

export function AutomationPanel() {
  const [automationRules, setAutomationRules] = useState<AutomationRule[]>([
    {
      id: '1',
      name: 'DCA Bitcoin',
      description: 'Buy $100 of BTC every week',
      type: 'dca',
      isActive: true,
      performance: '+12.5%'
    },
    {
      id: '2',
      name: 'Portfolio Rebalancing',
      description: 'Maintain 60% BTC, 30% ETH, 10% stablecoins',
      type: 'rebalance',
      isActive: true,
      performance: '+8.2%'
    },
    {
      id: '3',
      name: 'Stop Loss Protection',
      description: 'Sell if portfolio drops 15%',
      type: 'stop_loss',
      isActive: false,
      performance: 'N/A'
    },
    {
      id: '4',
      name: 'Yield Farming',
      description: 'Auto-stake USDC for 8% APY',
      type: 'yield',
      isActive: true,
      performance: '+8.0%'
    }
  ]);

  const toggleRule = (id: string) => {
    setAutomationRules(rules =>
      rules.map(rule =>
        rule.id === id ? { ...rule, isActive: !rule.isActive } : rule
      )
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'dca': return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case 'stop_loss': return <Shield className="w-4 h-4 text-red-500" />;
      case 'rebalance': return <Zap className="w-4 h-4 text-purple-500" />;
      case 'yield': return <Bot className="w-4 h-4 text-green-500" />;
      default: return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Smart Automation</h2>
          <p className="text-muted-foreground">AI-powered trading strategies</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Rule
        </Button>
      </div>

      <div className="grid gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant Active</h3>
                <p className="text-sm text-muted-foreground">Monitoring market conditions 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online</span>
              </div>
              <span>•</span>
              <span>Last action: 2 hours ago</span>
            </div>
          </CardContent>
        </Card>

        {automationRules.map((rule) => (
          <Card key={rule.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getTypeIcon(rule.type)}
                  <div>
                    <h4 className="font-semibold">{rule.name}</h4>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
                <Switch
                  checked={rule.isActive}
                  onCheckedChange={() => toggleRule(rule.id)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={rule.isActive ? "default" : "secondary"}>
                    {rule.isActive ? "Active" : "Inactive"}
                  </Badge>
                  {rule.performance !== 'N/A' && (
                    <Badge variant="outline" className="text-green-600">
                      {rule.performance}
                    </Badge>
                  )}
                </div>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
