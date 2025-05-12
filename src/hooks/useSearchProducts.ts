import { fetchSearchProducts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
// import { useSearchParams } from 'next/navigation';

export function useSearchProducts(q: string) {
  return useQuery({
    queryKey: ['products', { q }],
    queryFn: () => fetchSearchProducts({ q }),
  });
}
