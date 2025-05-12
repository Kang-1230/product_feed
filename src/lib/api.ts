export async function getProducts() {
  const data = await fetch('https://dummyjson.com/products?limit=20').then(
    (res) => res.json()
  );

  console.log('API 응답:', data);

  return data;
}

export async function fetchSearchProducts({ q }: { q: string }) {
  const data = await fetch(`https://dummyjson.com/products/search?q=${q}`).then(
    (res) => res.json()
  );

  console.log('Search API 응답:', data);

  return data;
}
