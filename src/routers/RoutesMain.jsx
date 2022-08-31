import { Route, Routes } from "react-router-dom";
import { Home, PageAvengers, PageHarry, PageStarWars } from "../pages";
import { NavbarMain } from "../components/NavbarMain";

export const RoutesMain = () => {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="harry+potter" element={<PageHarry />} />
        <Route path="avengers" element={<PageAvengers />} />
        <Route path="star+wars" element={<PageStarWars />} />
      </Routes>
    </>
  );
};
