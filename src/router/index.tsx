import "@style/_common.scss";

import { Route, Routes } from "react-router-dom";

import About from "@pages/About";
import CreateItem from "@pages/Item/Create";
import CreateUser from "@pages/User/Create";
import DefaultLayout from "@layout/DefaultLayout";
import Home from "@pages/Home";
import Item from "@pages/Item/index";
import Profile from "@pages/Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import User from "@pages/User/index";

export default function RouterRoute() {
  const routes = [
    { path: "home", name: "Home", element: Home },
    { path: "about", name: "About", element: About },
    { path: "profile", name: "Profile", element: Profile },
    { path: "item", name: "Item", element: Item },
    { path: "item/create", name: "CreateItem", element: CreateItem },
    { path: "user", name: "User", element: User },
    { path: "user/create", name: "CreateItem", element: CreateUser },
    // { path: 'item', name: 'Home', element: Item,
    //   children: [
    //     { path: 'create', name: 'Home', element: CreateItem },
    //     { path: 'edit', name: 'Home', element: EditItem },]
    // }
  ];
  return (
    <ProtectedRoute>
      <DefaultLayout>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </DefaultLayout>
    </ProtectedRoute>
  );
}
