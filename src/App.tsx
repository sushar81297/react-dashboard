import Login from '@pages/login';
import RouterRoute from '@router';
import '@style/_common.scss';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<RouterRoute />} />
    </Routes>
  );
}
