export async function getProducts({ pageParam = 0 }) {
  const data = await fetch(
    `https://dummyjson.com/products?limit=20&skip=${pageParam}`
  ).then((res) => res.json());

  return data;
}

export async function fetchSearchProducts({
  q,
  pageParam = 0,
}: {
  q: string;
  pageParam: number;
}) {
  const data = await fetch(
    `https://dummyjson.com/products/search?q=${q}&limit=20&skip=${pageParam}`
  ).then((res) => res.json());

  return data;
}

export async function fetchSortProducts({ pageParam = 0 }) {
  const data = await fetch(
    `https://dummyjson.com/products?sortBy=rating&order=desc&limit=20&skip=${pageParam}`
  ).then((res) => res.json());

  return data;
}
