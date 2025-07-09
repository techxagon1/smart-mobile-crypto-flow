
import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "@/utils/mockApi";

export const useNotifications = () => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 30000, // 30 seconds
  });
};
