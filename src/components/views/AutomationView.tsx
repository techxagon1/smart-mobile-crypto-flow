
import { AutomationPanel } from "@/components/wallet/AutomationPanel";

export function AutomationView() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Automation</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <AutomationPanel />
      </div>
    </div>
  );
}
