'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortForm() {
  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  console.log('search', search);
  const router = useRouter();

  if (search) return null;

  return (
    <div className="flex justify-end w-full mb-[12px]">
      <button
        onClick={() => {
          router.push('?sort=rating');
        }}
        className="bg-white text-[#1252F2] border-[1px] border-[#1252F2] px-[26px] py-[4px] rounded-[999px] "
      >
        별점순
      </button>
    </div>
  );
}
