import { Product } from '@/types/product';
import Image from 'next/image';
import StarRating from './StarRating';

export default function ProductGridCard({ item }: { item: Product }) {
  return (
    <div className="flex flex-col max-w-[1200px]">
      <Image
        src={item.images[0]}
        width={276}
        height={218}
        alt="썸네일 이미지"
      />

      <div className="w-[276px] h-[146px] ">
        <div className="w-[126px] h-[22px]">
          <StarRating rating={item.rating} />
        </div>
        <div className="text-[16px]/[24px] font-semibold">{item.title}</div>
        <div className="text-[13px]/[18px] h-[54px] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
          {item.description}
        </div>
        <div className="flex gap-[2px]">
          <Image src="/review.svg" alt="리뷰" width={18} height={18} />
          <div className="text-[12px]/[18px]">후기 {item.reviews.length}</div>
        </div>
      </div>
    </div>
  );
}
