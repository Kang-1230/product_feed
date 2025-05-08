import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex gap-[72px]">
      <Image src="/logo.svg" alt="로고" width={123} height={26} />
      <Link className="flex gap-[6px]" href="/">
        <Image src="/product.svg" alt="상품" width={22} height={22} />
        <div>상품</div>
      </Link>
    </header>
  );
}
