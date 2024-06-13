import { elementType } from 'prop-types';
import App from './App';
import Profile from './Profile';
import ErrorPage from './ErrorPage';
import About from './About';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];

export default routes;
