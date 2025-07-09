
import { useQuery } from "@tanstack/react-query";
import { fetchAssetDetails } from "@/utils/mockApi";

export const useAssetDetails = (symbol: string) => {
  return useQuery({
    queryKey: ['asset', symbol],
    queryFn: () => fetchAssetDetails(symbol),
    enabled: !!symbol,
    staleTime: 60000, // 1 minute
  });
};
