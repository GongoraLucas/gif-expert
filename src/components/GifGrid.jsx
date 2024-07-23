import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category)
    return (
        <>
            <h2>{category}</h2>
            {isLoading && (<p>Cargando...</p>)}
            <div className="card-grid">
                {gifs.map(gif => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
            <hr />

        </>
    )
}
