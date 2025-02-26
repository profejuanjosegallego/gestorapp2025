import Menu from "../../common/Menu/Menu";
import { Banner } from "../../common/Banner/Banner";
import { Acerca } from "../../common/Acerca/Acerca";
import { Footer } from "../../common/Footer/Footer";
import Dashboard from "../../common/Dashboard/Dashboard"; // Asegúrate de que la ruta es correcta

export function Home() {
  return (
    <>
      <Menu />
      <main>
        <Banner />
        <Acerca />
        <section>
          <Dashboard />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;