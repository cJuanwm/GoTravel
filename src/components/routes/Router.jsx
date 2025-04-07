import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { Menu } from "../common/Menu/Menu";
import { Acerca } from "../common/Acerca/Acerca";
import { Booking } from "../../pages/Booking/Booking";

export function Router() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </>
  );
}
