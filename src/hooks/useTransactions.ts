
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "@/utils/mockApi";

export const useTransactions = () => {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    staleTime: 30000, // 30 seconds
  });
};
