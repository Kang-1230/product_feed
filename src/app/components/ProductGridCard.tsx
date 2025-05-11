import { Product } from '@/types/product';
import Image from 'next/image';
import StarRating from './StarRating';

export default function ProductGridCard({ item }: { item: Product }) {
  return (
    <div>
      <Image
        src={item.images[0]}
        width={276}
        height={218}
        alt="썸네일 이미지"
      />

      <div>
        <div>
          <StarRating rating={item.rating} />
        </div>
        <div>{item.title}</div>
        <div>{item.description}</div>
        <div>
          <Image src="/review.svg" alt="리뷰" width={20} height={20} />
          <div>후기 {item.reviews.length}</div>
        </div>
      </div>
    </div>
  );
}
