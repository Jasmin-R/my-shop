import CategoryItem from "../category-item/category-item.component";
import React from "react";

const Directory = ({categories}) => {
    if (!Array.isArray(categories)) {
        return <div>No categories found!</div>;
      }
      
    return(
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key ={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory;