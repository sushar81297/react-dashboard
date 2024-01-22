import { Route, Routes } from "react-router-dom";
import DefaultLayout from "@layout/DefaultLayout";
import Login from "@pages/login";
import '@style/_common.scss';

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<DefaultLayout />} />
    </Routes>
  );
}

