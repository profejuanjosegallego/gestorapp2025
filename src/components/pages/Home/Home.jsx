import Menu from "../../common/Menu/Menu";
import { Banner } from "../../common/Banner/Banner";
import { Acerca } from "../../common/Acerca/Acerca";
import { Footer } from "../../common/Footer/Footer";
import Dashboard from "../../common/Dashboard/Dashboard"; // Verifica que la ruta sea correcta

export function Home() {
  return (
    <>
      <Menu />
      <main>
        <Banner />
        <Acerca />
        <Dashboard /> {/* Aquí se agrega el Dashboard */}
      </main>
      <Footer />
    </>
  );
}
