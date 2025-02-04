import{Home} from"../../pages/Home/Home"
import{Menu} from"../Menu/Menu"

import{Routes, Route} from "react-router-dom"

export function Router(){
    return(
    
    <>
    <Menu></Menu>
        <Routes>
            <Route path="/" element={ <Home />} />

        </Routes>
    </>
    )
    
}