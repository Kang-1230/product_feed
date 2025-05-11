export async function getProducts() {
  const data = await fetch('https://dummyjson.com/products?limit=20').then(
    (res) => res.json()
  );

  console.log('API 응답:', data);

  return data;
}
