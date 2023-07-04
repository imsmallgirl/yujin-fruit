import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';

interface RouterType {
  id: number;
  path: string;
  label: string;
  element: any;
}

const routers: RouterType[] = [
  {
    id: 0,
    path: '/',
    label: 'Main',
    element: <Main />,
  },
  {
    id: 1,
    path: '/detail/:id',
    label: 'Detail',
    element: <Detail />,
  },
  {
    id: 2,
    path: '/cart',
    label: 'Cart',
    element: <Cart />,
  },
];

const Router = () => {
  return (
    <Routes>
      {routers.map((router) => (
        <Route key={router.id} path={router.path} element={router.element} />
      ))}
    </Routes>
  );
};

export default Router;
