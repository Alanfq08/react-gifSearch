import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setcategories] = useState(defaultCategories);
    console.log(categories);
    return (
        <div className="container">
            <h1>Gif App</h1>
            <hr />
            <AddCategory setcategories={setcategories}/>
            {
                categories.map( (category, id)=>{
                    return <GifGrid key={id} category={category}/>
                })
            }
        </div>
    )
}
