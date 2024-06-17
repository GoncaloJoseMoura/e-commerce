import ErrorPage from './ErrorPage';
import Layout from './Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:shop',
    element: <Layout />,
  },
  {
    path: '/product/:productId',
    element: <Layout />,
  },
];

export default routes;
