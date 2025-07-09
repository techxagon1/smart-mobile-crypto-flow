
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TransactionList } from "@/components/wallet/TransactionList";

export default function Transactions() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full"
    >
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
        <TransactionList />
      </div>
    </motion.div>
  );
}
