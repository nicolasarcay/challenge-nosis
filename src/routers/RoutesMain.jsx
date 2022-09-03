import { Route, Routes } from "react-router-dom";
import { Home, Movie, NotFound } from "../pages";
import { NavbarMain } from "../components";

export const RoutesMain = () => {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
