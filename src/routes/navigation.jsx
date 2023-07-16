import { Outlet , Link} from "react-router-dom";
import React from "react";


const Navigation = () => {
    return (
        <div> 
        <div>
            <Link className="logo-container" to ='/'>
                <h2>Logo</h2>
            </Link>

        <div>
            <Link to = '/about'>about</Link>
            <Link to = '/contact'>contact</Link>
            <Link to = '/sign-in'>sing in</Link>
        </div>


        </div>
        <Outlet/>
        </div>
       
    )
}

export default Navigation;