import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx"
import { Menu } from "../common/Menu/Menu.jsx"


const Router = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashborad" element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default Router