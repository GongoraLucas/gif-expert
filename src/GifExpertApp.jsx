import { useState } from "react"
import { AddCategorie,GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Dragon Ball"])
 
    const onAddCategory = (category) => {
        if (categories.includes(category.toLowerCase())) return;
        setCategories((categories) => [category.toLowerCase(), ...categories])


    }
    return (
        <>
            {/* Title */}
            <h1>Gif Expert</h1>
            {/* Input */}
            <AddCategorie onNewCategory={(category) => onAddCategory(category)} />
            {/* Collection */}

            {categories.map((category) => (
                <GifGrid key={category} category={ category } /> 
            )
            )}

        </>
    )
}