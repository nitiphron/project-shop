import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import useAuth from '../hooks/useAuth';
import Header from '../layout/Header';
import Home from '../layout/Home';
import ProductForm from '../layout/ProductForm';
import Cart1 from '../layout/Cart1';
import Cart2 from '../layout/Cart2';
import Cart3 from '../layout/Cart3';
import Cart4 from '../layout/Cart4';
import Cart5 from '../layout/Cart5';
import Cart6 from '../layout/Cart6';
import Cart7 from '../layout/Cart7';
import Cart8 from '../layout/Cart8';
import Cart9 from '../layout/Cart9';
import Payment from '../layout/Payment'

const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: '/pro', element: <ProductForm /> },
      { path: '/cart1', element: <Cart1 /> },
      { path: '/cart2', element: <Cart2 /> },
      { path: '/cart3', element: <Cart3 /> },
      { path: '/cart4', element: <Cart4 /> },
      { path: '/cart5', element: <Cart5 /> },
      { path: '/cart6', element: <Cart6 /> },
      { path: '/cart7', element: <Cart7 /> },
      { path: '/cart8', element: <Cart8 /> },
      { path: '/cart9', element: <Cart9 /> },
      { path: '/payment', element: <Payment /> }, // Add route for the payment page
    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
