import './category.styles.scss';
import React from 'react';
//import categories from '../../data/categories';

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return(
        <div className='category-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;