import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import decrease from '../assets/decrease.png';
import increase from '../assets/increase.png';
import classes from './product.module.css';
import shipping from '../assets/shipping.png';
import payment from '../assets/payment.png';
import package_ from '../assets/package.png';

function Product({ id, store, add }) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState({ active: 'S', sizes: ['S', 'M', 'L', 'XL'] });

  const activate = (id) => {
    setSize({ ...size, active: id });
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  useEffect(
    () => {
      setLoading(true);
      for (const key in store) {
        const found = store[key].find((value) => value.id == id);
        if (found !== undefined) {
          setLoading(false);
          setData(found);

          return;
        }
      }

      // Only fetch data from API if not found in store and data is still undefined
      if (data === undefined) {
        fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors' })
          .then((response) => response.json())
          .then((response) => setData(response))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }
    },
    [id, store], // Re-run useEffect if id or store changes
  );

  return (
    <>
      {loading && (
        <div className={classes.failed}>
          <div className={classes.loader} />
        </div>
      )}
      {error && (
      <div className={classes.failed}>
        <h1>Product cannot be fetched, correct the url</h1>
      </div>
      )}
      {data && (
        <div className={classes.page}>
          <div className={classes.productImage}>
            <img
              src={data.image}
              alt=""
            />
          </div>
          <div className={classes.productDescription}>
            <ul>
              <li className={classes.title}>
                <h2>{data.title}</h2>
                <div>
                  <p style={{ display: 'flex', justifyContent: 'end', fontSize: '26px' }}>
                    {data.price}
                    $
                  </p>
                  <p style={{ fontSize: '14px', color: '#838181' }}>Tax included</p>
                </div>
              </li>
              <li className={classes.description}>
                <p>{data.description}</p>
              </li>
              <li>
                <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '10px' }}>Select size:</p>
                <div className={classes.buttons}>
                  {size.sizes.map((value) => {
                    if (size.active == value) {
                      return <button type="button" key={value} className={classes.active} onClick={() => activate(value)}>{value}</button>;
                    }
                    return <button type="button" key={value} onClick={() => activate(value)}>{value}</button>;
                  })}
                </div>
              </li>
              <li>
                <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '10px' }}>Units:</p>
                <div className={classes.units}>
                  <div>
                    <img onClick={minus} src={decrease} alt="" />
                  </div>
                  <p>{count}</p>
                  <div>
                    <img onClick={plus} src={increase} alt="" />
                  </div>

                </div>
              </li>
              <li className={classes.addCart}>
                <button type="button" onClick={() => add(id, { ...data, size: size.active, units: count })}>ADD TO CART</button>
              </li>
              <li className={classes.garantee}>
                <div>
                  <img src={shipping} alt="" />
                  <p>Delivery in 2-3 work days</p>
                </div>
                <div>
                  <img src={package_} alt="" />
                  <p>Free returns</p>
                </div>
                <div>
                  <img src={payment} alt="" />
                  <p>Secure payments</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

    </>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  store: PropTypes.object,
  add: PropTypes.func,
};

export default Product;
