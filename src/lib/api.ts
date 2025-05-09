export async function getProducts() {
  const data = await fetch('https://dummyjson.com/products').then((res) =>
    res.json()
  );

  console.log('API 응답:', data);

  return data;
}
