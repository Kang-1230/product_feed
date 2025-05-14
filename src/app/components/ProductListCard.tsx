import { Product } from '@/types/product';
import Image from 'next/image';
import StarRating from './StarRating';

export default function ProductListCard({ item }: { item: Product }) {
  return (
    <div className="flex max-w-[1200px] ">
      <Image
        className="w-[300px] rounded-[8px]  min-w-[140px] max-h-[140px] bg-gray-100"
        src={item.images[0]}
        width={300}
        height={140}
        alt="썸네일 이미지"
      />

      <div className="w-[900px]  items-end text-right ">
        <div className="flex justify-end">
          <StarRating rating={item.rating} />
        </div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div className="flex gap-[2px] items-center justify-end">
          <Image src="/review.svg" alt="리뷰" width={20} height={20} />
          <div>후기 {item.reviews.length}</div>
        </div>
      </div>
    </div>
  );
}
