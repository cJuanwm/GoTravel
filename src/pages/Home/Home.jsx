import { Banner } from "../../components/common/Banner/Banner";
import { Acerca } from "../../components/common/Acerca/Acerca";
import { Footer } from "../../components/common/Footer/Footer";
import { Menu } from "../../components/common/Menu/Menu";

export function Home() {
  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Acerca></Acerca>
      <Footer></Footer>
    </>
  );
}
