function run() {
  const product = getRequest();
}
async function getRequest() {
  const products = await axios.get(
    "http://pinyin-marine.com/products/data.json"
  );
  console.log(products);
  return products;
}
