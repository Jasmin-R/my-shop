import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../components/directory/directory.component";
import categories from "../data/categories";


const Home = (categoryItem) => {
    return (
        <div>
           <Outlet/>
           <Directory categoryItem = {categories}/>
        </div>
         
    )
}
 
export default Home;