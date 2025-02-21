import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Booking} from "../pages/Booking/Booking"
import {Menu} from "../common/Menu/Menu"
import {Footer} from "../common/Footer/Footer"

export function Router(){
    return(
        <>
            <Menu></Menu>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>,
                    <Route path="/booking" element={<Booking/>}></Route>
                </Routes>
           <Footer></Footer>
        </>

    )
}

