'use client';

import { Product } from '@/types/product';
import ProductListCard from './ProductListCard';
import { useProducts } from '@/hooks/useProducts';

export default function ProductList() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>ProductList 로딩 중...</div>;
  if (error) return <div>useProducts 에러 발생</div>;
  console.log('카드로 데이터 불러오기', data);

  return (
    <div className="flex flex-col gap-[24px]">
      {data.products.map((item: Product) => (
        <ProductListCard item={item} key={item.id} />
      ))}
    </div>
  );
}
