import Image from 'next/image';

export default function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400 text-xl items-end">
      {[...Array(fullStars)].map((_, i) => (
        <Image
          key={`full-${i}`}
          src="/fullstar.svg"
          alt="꽉 찬 별"
          width={20}
          height={20}
        />
      ))}
      {hasHalfStar && (
        <Image
          key="half"
          src="/halfstar.svg"
          alt="반 별"
          width={20}
          height={20}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Image
          key={`empty-${i}`}
          src="/emptystar.svg"
          alt="빈 별"
          width={20}
          height={20}
        />
      ))}
    </div>
  );
}
