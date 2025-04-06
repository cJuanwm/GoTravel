import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { Menu } from "../common/Menu/Menu";
import { Acerca } from "../common/Acerca/Acerca";
import { Dashboard } from "../../pages/DashBoard/Dashboard";
import { Booking } from "../../pages/Booking/Booking";
import { PruebaHooks } from "../../pages/PruebaHooks/PruebaHooks";

export function Router() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/nombre" element={<PruebaHooks />}></Route>
      </Routes>
    </>
  );
}
