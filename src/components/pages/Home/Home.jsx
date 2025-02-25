import {Menu} from "../../common/Menu/Menu"
import {Banner} from "../../common/Banner/Banner"
import {Acerca} from "../../common/Acerca/Acerca"
import {Footer} from "../../common/Footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css';

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