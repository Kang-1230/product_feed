import { useEffect, useRef } from 'react';

interface InfiniteScrollTriggerProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export default function InfiniteScrollTrigger({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: InfiniteScrollTriggerProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage]);

  return <div ref={observerRef} className="h-10" />;
}
