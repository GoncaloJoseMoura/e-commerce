import { Link } from 'react-router-dom';
import classes from './homepage.module.css';

function Homepage() {
  return (
    <div className={classes.mainImage}>
      <ul className={classes.list}>
        <li className={classes.firstCall}>
          Summer
          <br />
          <span className={classes.secCall}>Collection</span>
        </li>
        <li className={classes.description}>
          Beat The Heat In Style! Explore Our Cool And Comfortable Summer Looks.
        </li>
        <li>
          <Link to="/women">
            <button type="button" className={classes.button}>Shop Now!</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
