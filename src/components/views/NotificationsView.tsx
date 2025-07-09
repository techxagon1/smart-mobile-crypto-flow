
import { Bell, TrendingUp, TrendingDown, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNotifications } from "@/hooks/useNotifications";

export function NotificationsView() {
  const { data: notifications, isLoading, error } = useNotifications();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'price_alert': return TrendingDown;
      case 'automation': return TrendingUp;
      case 'strategy': return TrendingUp;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'price_alert': return 'text-red-500';
      case 'automation': return 'text-green-500';
      case 'strategy': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  };

  const unreadCount = notifications?.filter(n => !n.read).length || 0;

  return (
    <div className="flex flex-col h-full">
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
          {isLoading ? (
            <Skeleton className="h-5 w-6" />
          ) : (
            <Badge variant="secondary">{unreadCount}</Badge>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/2 mb-1" />
                      <Skeleton className="h-3 w-1/4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              Failed to load notifications. Please try again.
            </CardContent>
          </Card>
        ) : (
          <>
            {notifications?.slice(0, 3).map((notification) => {
              const IconComponent = getNotificationIcon(notification.type);
              return (
                <Card key={notification.id} className={!notification.read ? 'border-primary/20' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${getNotificationColor(notification.type)}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Yesterday</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Portfolio milestone reached</p>
                      <p className="text-sm text-muted-foreground">Your portfolio reached $10,000</p>
                      <p className="text-xs text-muted-foreground mt-1">1d ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
