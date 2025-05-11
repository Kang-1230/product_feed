import { fetchSearchProducts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export function useSearchProducts() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';

  useQuery({
    queryKey: ['products', { q }],
    queryFn: () => fetchSearchProducts({ q }),
  });
}
