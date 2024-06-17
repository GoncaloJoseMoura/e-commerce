import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './footer';
import Homepage from './homepage';
import Shop from './pages/shop';
import Product from './pages/product';
import Header from './header';
import ErrorPage from './ErrorPage';

export default function Layout() {
  const { shop, productId } = useParams();

  const [store, setStore] = useState({});
  const [shoppingcart, setShoppingCart] = useState({});

  const deleteFromCart = (id) => {
    setShoppingCart(Object.fromEntries(
      Object.entries(shoppingcart).filter(([key]) => key != id),
    ));
  };

  const addtoCart = (id, data) => {
    setShoppingCart({ ...shoppingcart, [id]: data });
  };

  const changeUnits = (id, units) => {
    setShoppingCart({ ...shoppingcart, [id]: { ...shoppingcart[id], units } });
  };

  const addtoStore = (visited, data) => {
    setStore({ ...store, [visited]: data });
  };

  return (
    <>

      <Header shoppingcart={shoppingcart} onchange={changeUnits} ondelete={deleteFromCart} />

      {shop === undefined && productId === undefined && <Homepage />}
      { productId && <Product id={productId} store={store} add={addtoCart} />}
      {!['women', 'men', 'jewelry'].includes(shop) && <ErrorPage />}
      { ['women', 'men', 'jewelry'].includes(shop) && (
        <Shop name={shop} store={store} add={addtoStore} />
      )}

      <Footer />
    </>

  );
}
