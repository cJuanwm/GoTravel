import { Banner } from "../../common/Banner/Banner";
import { Acerca } from "../../common/Acerca/Acerca";
import { Footer } from "../../common/Footer/Footer";
import { Card } from "../../common/Card/Card";
import { Bookins } from "../../common/Bookins/Bookins";

export function Home() {
  return (
    <>
      <Banner></Banner>
      <Bookins></Bookins>
      <Acerca></Acerca>
      <Footer></Footer>
    </>
  );
}
