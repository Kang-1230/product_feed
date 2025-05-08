import Image from 'next/image';

export default function SearchForm() {
  return (
    <div className="flex w-[844px] h-[75px] shadow-lg shadow-gray-300 rounded-full ">
      <div className="flex">
        <Image
          src="/search.svg"
          alt="검색"
          width={24}
          height={24}
          className="h-[24px]"
        />
        <input
          placeholder="찾고 싶은 상품을 검색해보세요"
          className="w-[680px] h-[24px]"
        />
      </div>
      <button className="w-[95px] h-[56px] bg-[#1252F2] rounded-[999px] text-white">
        검색
      </button>
    </div>
  );
}
