import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();


//   if cart data is in database, you have to async await
const storedCart=getShoppingCart();
 console.log(storedCart)
  return products;
};
export default cartProductLoader;
