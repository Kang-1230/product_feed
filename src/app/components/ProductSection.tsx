'use client';

import { Product } from '@/types/product';
import useViewMode from '@/lib/viewMode';
import { useSearchParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchSearchProducts, fetchSortProducts, getProducts } from '@/lib/api';
import ProductListCard from './ProductListCard';
import ProductGridCard from './ProductGridCard';
import InfiniteScrollTrigger from './InfiniteScrollTrigger';
import ProductListSkeleton from './ProductListSkeleton';
import ProductGridSkeleton from './ProductGridSkeleton';

export default function ProductSection() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const sort = searchParams.get('sort') ?? 'default';
  const viewMode = useViewMode();

  const isSorted = !q && sort === 'rating';

  let queryFn;
  let queryKey;

  if (q) {
    queryFn = ({ pageParam = 0 }) => fetchSearchProducts({ q, pageParam });
    queryKey = ['products', 'search', q];
  } else if (isSorted) {
    queryFn = ({ pageParam = 0 }) => fetchSortProducts({ pageParam });
    queryKey = ['products', 'sort', 'rating'];
  } else {
    queryFn = ({ pageParam = 0 }) => getProducts({ pageParam });
    queryKey = ['products'];
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const loaded = allPages.length * 20;
      return loaded < total ? loaded : undefined;
    },
  });

  if (viewMode === 'loading') return null;

  if (isLoading) {
    console.log('데이터 로딩중');
    return viewMode === 'list' ? (
      <ProductListSkeleton />
    ) : (
      <ProductGridSkeleton />
    );
  }
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (!data) {
    return console.log('데이터 없음');
  }

  const productList: Product[] = data?.pages.flatMap((page) => page.products);

  return (
    <div
      className={
        viewMode === 'list'
          ? 'flex flex-col gap-[24px]'
          : 'grid grid-cols-4 gap-[32px]'
      }
    >
      {productList.map((item: Product) =>
        viewMode === 'list' ? (
          <ProductListCard item={item} key={item.id} />
        ) : (
          <ProductGridCard item={item} key={item.id} />
        )
      )}
      <InfiniteScrollTrigger
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
}
