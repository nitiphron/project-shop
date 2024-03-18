import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import useAuth from '../hooks/useAuth';
import Header from '../layout/Header';
import Home from '../layout/Home';
import ProductForm from '../layout/ProductForm';
import Cart from '../layout/Cart';
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
      { path: '/cart', element: <Cart /> },
      { path: '/payment', element: <Payment /> }, // Add route for the payment page
    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
