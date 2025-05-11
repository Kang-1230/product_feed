'use client';

import { Product } from '@/types/product';
import ProductListCard from './ProductListCard';
import { useProducts } from '@/hooks/useProducts';
import ProductGridCard from './ProductGridCard';
import useViewMode from '@/lib/viewMode';

export default function ProductSection() {
  const { data, isLoading, error } = useProducts();
  const viewMode = useViewMode();

  if (isLoading) return <div>ProductSection 로딩 중...</div>;
  if (error) return <div>useProducts 에러 발생</div>;
  console.log('카드로 데이터 불러오기', data);

  return (
    <div className={viewMode === 'list' ? 'flex flex-col gap-[24px]' : ''}>
      {data.products.map((item: Product) =>
        viewMode === 'list' ? (
          <ProductListCard item={item} key={item.id} />
        ) : (
          <ProductGridCard item={item} key={item.id} />
        )
      )}
    </div>
  );
}
