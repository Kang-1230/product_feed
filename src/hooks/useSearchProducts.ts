import { fetchSearchProducts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export function useSearchProducts(q: string) {
  return useQuery({
    queryKey: ['searchedProducts', { q }],
    queryFn: () => fetchSearchProducts({ q }),
  });
}
