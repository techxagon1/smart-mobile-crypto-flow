
import { motion } from "framer-motion";
import { 
  User, 
  Shield, 
  Bell, 
  Eye, 
  HelpCircle, 
  MessageSquare,
  ChevronRight,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  const settingsSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Personal Information", description: "Manage your account details", hasToggle: false },
        { icon: Shield, label: "Linked Accounts", description: "Connect external accounts", hasToggle: false }
      ]
    },
    {
      title: "Security",
      items: [
        { icon: Shield, label: "Two-Factor Authentication", description: "Enhanced security for your account", hasToggle: true },
        { icon: Eye, label: "Withdrawal Limits", description: "Set daily withdrawal limits", hasToggle: false }
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Eye, label: "Display Settings", description: "Theme and view preferences", hasToggle: false },
        { icon: Bell, label: "Notification Preferences", description: "Manage your notifications", hasToggle: false }
      ]
    },
    {
      title: "Support",
      items: [
        { icon: MessageSquare, label: "Contact Support", description: "Get help from our support team", hasToggle: false },
        { icon: HelpCircle, label: "FAQ", description: "Frequently asked questions", hasToggle: false }
      ]
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
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-20">
        {/* Profile Section */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
            <Card>
              <CardContent className="p-0">
                {section.items.map((item, index) => (
                  <div key={item.label} className={`p-4 ${index < section.items.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      {item.hasToggle ? (
                        <Switch />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Button variant="destructive" className="w-full h-12">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </motion.div>
  );
}
