import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import classes from './shop.module.css';

function Shop({ name, store, add }) {
  const getData = {
    women: ["Women's clothes", "women's%20clothing"],
    men: ["Men's clothes", "men's%20clothing"],
    jewelry: ['Jewelry', 'jewelery'],
  };

  const [title, apicall] = getData[name];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(
    () => {
      setLoading(true);
      if (store[name] === undefined) {
        fetch(`https://fakestoreapi.com/products/category/${apicall}`, { mode: 'cors' })
          .then((response) => response.json())
          .then((response) => add(name, response))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
        return;
      }
      setLoading(false);
    },
    [name],
  );

  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h1>{title}</h1>
        <div className={classes.span} />
      </div>

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
      <div className={classes.items}>
        { store[name] && (
          store[name].map((value) => (
            <Link to={`/product/${value.id}`} key={value.id} style={{ textDecoration: 'none', color: 'black' }}>
              <div className={classes.item}>
                <div className={classes.itemImg}>
                  <img src={value.image} alt="" />
                </div>

                <div className={classes.description}>
                  <p>{value.title}</p>
                  <p>
                    {value.price}
                    $
                  </p>
                </div>
              </div>
            </Link>
          )))}

      </div>
    </div>
  );
}

Shop.propTypes = {
  name: PropTypes.string,
  store: PropTypes.object,
  add: PropTypes.func,
};

export default Shop;
