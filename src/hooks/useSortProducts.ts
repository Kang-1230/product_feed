import { fetchSortProducts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export function useSortProducts() {
  return useQuery({
    queryKey: ['sortedProducts'],
    queryFn: () => fetchSortProducts(),
  });
}
