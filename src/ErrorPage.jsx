import { Link } from 'react-router-dom';
import classes from './errorpage.module.css';

export default function ErrorPage() {
  return (
    <div className={classes.page}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}
