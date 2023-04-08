import Product from "../components/Product/Product";
import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  //   if cart data is in database, you have to async await
  const storedCart = getShoppingCart();
  console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
    }
  }

  return products;
};
export default cartProductLoader;
