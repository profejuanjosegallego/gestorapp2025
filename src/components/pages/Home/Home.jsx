import { Menu } from "../../common/Menu/Menu";
import { Banner } from "../../common/Banner/Banner";
import { Acerca } from "../../common/Acerca/Acerca";
import Footer from "../../common/Footer/Footer";


export function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <Acerca />
      <Footer />
    </>
  );
}
