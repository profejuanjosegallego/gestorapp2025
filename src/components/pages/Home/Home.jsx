import {Menu} from "../../common/Menu/Menu"
import {Banner} from "../../common/Banner/Banner"
import {Acerca} from "../../common/Acerca/Acerca"
import  Footer  from "../../common/Footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importar Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importar scripts de Bootstrap


export function Home(){

    return(

        <>

            <Menu></Menu>
            <Banner></Banner>
            <Acerca></Acerca>
            <Footer></Footer>
            
        
        </>
    )

}