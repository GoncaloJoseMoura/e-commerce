import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import logo from './assets/logo.svg';
import decrease from './assets/decrease.png';
import increase from './assets/increase.png';
import remove from './assets/delete.png';
import close from './assets/close.png';

function Item({ id, value, ondelete }) {
  const [count, setCount] = useState(value.units);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.item}>
      <div className={classes.productImg}>
        <img src={value.image} alt="" />
      </div>
      <ul>
        <li className={classes.title}>{value.title}</li>
        <li className={classes.price}>
          {value.price}
          $
        </li>
        <li className={classes.size}>{value.size}</li>
        <li className={classes.units}>
          <div>
            <img onClick={minus} src={decrease} alt="" />
          </div>
          <p>{count}</p>
          <div>
            <img onClick={plus} src={increase} alt="" />
          </div>
        </li>
        <li className={classes.delete}>
          <button type="button" onClick={() => ondelete(id)}>
            <img src={remove} alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
}

function Header({ shoppingcart, ondelete }) {
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className={classes.info}>
        <div className={classes.marquee}>
          <ul className={classes.marquee__content}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
              <p>Free Shipping on Orders $60+</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>
              <p>Summer Sale</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
              <p>Free Shipping on Orders $60+</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>
              <p>Summer Sale</p>
            </li>
          </ul>
          <ul className={classes.marquee__content} aria-hidden="true">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
              <p>Free Shipping on Orders $60+</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>
              <p>Summer Sale</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
              <p>Free Shipping on Orders $60+</p>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>
              <p>Summer Sale</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.mainHeader}>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="" />
        </Link>

        <div className={classes.links}>
          <Link to="/women">Women&apos;s clothes</Link>
          <Link to="/men">Men&apos;s clothes</Link>
          <Link to="/jewelry">Jewelry</Link>
        </div>

        <div className={classes.cart}>
          <p>
            {Object.keys(shoppingcart).length == 0 ? '' : `${Object.keys(shoppingcart).length} | `}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => setCart(true)}>
            <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 80h64l48 272h256" />
            <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
        </div>

      </div>
      {cart && (
        <div className={classes.cartArea}>
          <div className={classes.dark} onClick={() => setCart(false)} />
          <div className={classes.checkout}>
            <div className={classes.heading}>
              <h2>Cart</h2>
              <button type="button" aria-label="save" onClick={() => setCart(false)}>
                <img src={close} alt="" />
              </button>
            </div>
            <div className={classes.items}>

              { Object.entries(shoppingcart).map(([key, value]) => (
                <Item key={key} id={key} value={value} ondelete={ondelete} />
              ))}
            </div>

            <div className={classes.exit}>
              <button type="button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>

  );
}

export default Header;
