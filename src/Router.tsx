import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

interface RouterType {
  id: number;
  path: string;
  label: string;
  element: any;
}
// redux 설치해야함
const routers: RouterType[] = [
  {
    id: 0,
    path: "/",
    label: "Main",
    element: <Main />,
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
