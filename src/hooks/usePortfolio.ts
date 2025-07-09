
import { useQuery } from "@tanstack/react-query";
import { fetchPortfolioData, fetchPerformanceData } from "@/utils/mockApi";

export const usePortfolio = () => {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolioData,
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // 1 minute
  });
};

export const usePerformanceData = (period: string) => {
  return useQuery({
    queryKey: ['performance', period],
    queryFn: () => fetchPerformanceData(period),
    staleTime: 60000, // 1 minute
  });
};
