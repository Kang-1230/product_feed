'use client';

import { Product } from '@/types/product';
import ProductListCard from './ProductListCard';
import { useProducts } from '@/hooks/useProducts';
import ProductGridCard from './ProductGridCard';
import useViewMode from '@/lib/viewMode';
import { useSearchParams } from 'next/navigation';
import { useSearchProducts } from '@/hooks/useSearchProducts';

export default function ProductSection() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? '';
  // const sort = searchParams.get('sort') ?? 'default';
  const viewMode = useViewMode();

  const {
    data: searchData,
    isLoading: isSearchDataLoading,
    error: searchDataError,
  } = useSearchProducts(q);
  const { data, isLoading, error } = useProducts();

  if (isLoading || isSearchDataLoading)
    return <div>ProductSection 로딩 중...</div>;
  if (error || searchDataError) return <div>useProducts 에러 발생</div>;
  console.log('카드로 데이터 불러오기', data);

  const productList = q ? searchData.products : data.products;

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
