import { Route, Routes } from "react-router-dom";
import { Inbox, Login, Register } from "../pages";
import { Header, Nav } from "../components";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </>
  );
};
