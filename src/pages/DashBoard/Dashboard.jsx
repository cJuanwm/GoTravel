import { Calendario } from "../../components/common/Calendario/Calendario";
import { Footer } from "../../components/common/Footer/Footer";
import { Menu } from "../../components/common/Menu/Menu";

export function Dashboard() {
  return (
    <>
      <Menu></Menu>
      <Calendario></Calendario>
      <Footer></Footer>
    </>
  );
}
