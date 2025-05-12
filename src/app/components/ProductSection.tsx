'use client';

import { Product } from '@/types/product';
import ProductListCard from './ProductListCard';
import { useProducts } from '@/hooks/useProducts';
import ProductGridCard from './ProductGridCard';
import useViewMode from '@/lib/viewMode';
import { useSearchParams } from 'next/navigation';
import { useSearchProducts } from '@/hooks/useSearchProducts';
import { useSortProducts } from '@/hooks/useSortProducts';

export default function ProductSection() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const sort = searchParams.get('sort') ?? 'default';
  const viewMode = useViewMode();

  const isSorted = !q && sort === 'rating';

  const {
    data: searchData,
    isLoading: isSearchDataLoading,
    error: searchDataError,
  } = useSearchProducts(q);
  const {
    data: sortedData,
    isLoading: isSortedLoading,
    error: sortedError,
  } = useSortProducts();
  const { data, isLoading, error } = useProducts();

  if (isLoading || isSearchDataLoading || isSortedLoading)
    return <div>ProductSection 로딩 중...</div>;
  if (error || searchDataError || sortedError)
    return <div>useProducts 에러 발생</div>;
  console.log('카드로 데이터 불러오기', data);

  console.log('isSorted', isSorted);

  let productList: Product[] = [];

  if (q) {
    productList = searchData?.products ?? [];
  } else if (isSorted) {
    productList = sortedData?.products ?? [];
  } else {
    productList = data?.products ?? [];
  }

  if (productList.length === 0) {
    return <div>일치하는 결과가 없습니다.</div>;
  }

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
    </div>
  );
}
