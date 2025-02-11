import {Routes, Route} from "react-router-dom"

import {Home} from "../pages/Home/Home"
import { DashBoard } from "../pages/DashBoard/DashBoard"

import { Menu } from "../common/Menu/Menu"

export function Router(){
    return(
        <>
        <Menu></Menu>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
        </Routes>
        </>
    )
}