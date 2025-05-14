export async function getProducts({ pageParam = 0 }) {
  const response = await fetch(
    `https://dummyjson.com/products?limit=20&skip=${pageParam}`
  );
  if (!response.ok) throw new Error('에러가 발생했습니다');

  const data = await response.json();
  return data;
}

export async function fetchSearchProducts({
  q,
  pageParam = 0,
}: {
  q: string;
  pageParam: number;
}) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=20&skip=${pageParam}`
  );
  if (!response.ok) throw new Error('에러가 발생했습니다');

  const data = await response.json();
  return data;
}

export async function fetchSortProducts({ pageParam = 0 }) {
  const response = await fetch(
    `https://dummyjson.com/products?sortBy=rating&order=desc&limit=20&skip=${pageParam}`
  );
  if (!response.ok) throw new Error('에러가 발생했습니다');

  const data = await response.json();
  return data;
}
