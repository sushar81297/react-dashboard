import { Route, Routes } from "react-router-dom";
import DefaultLayout from "@layout/DefaultLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import About from '@pages/About';
import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Item from '@pages/Item';
import Login from "@pages/login";
import '@style/_common.scss';

export default function RouterRoute() {
  const routes = [
    { path: '/home', name: 'Home', element: Home },
    { path: '/about', name: 'Home', element: About },
    { path: '/profile', name: 'Home', element: Profile },
    { path: '/item', name: 'Home', element: Item },
  ]
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              element={<ProtectedRoute><DefaultLayout><route.element /></DefaultLayout></ProtectedRoute>}
            />
          )
        )
      })}
    </Routes>
  );
}
