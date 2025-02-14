import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home/Home"
import {Dashboard} from "../pages/Dashboard/Dashboard"
import {Menu} from "../common/Menu/Menu"
import {Footer} from "../common/Footer/Footer"

export function Router(){
    return(
        <>
            <Menu></Menu>
                <Routes>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/dash" element={<Dashboard/>}></Route>
                </Routes>
           <Footer></Footer>
        </>

    )
}

