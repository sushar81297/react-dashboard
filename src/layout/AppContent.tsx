import About from '@pages/About';
import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Item from '@pages/Item';
import { Routes, Route } from 'react-router-dom';

export default function AppContent() {
  const routes = [
    { path: '/home', name: 'Home', element: Home },
    { path: '/about', name: 'Home', element: About },
    { path: '/profile', name: 'Home', element: Profile },
    { path: '/item', name: 'Home', element: Item },
  ]
  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              element={<route.element />}
              path={route.path}
            />
          )
        )
      })}
    </Routes>
  )
}