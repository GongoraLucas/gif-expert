import { useEffect, useState } from "react"
import { getImage } from "../helpers/fetchGif"


export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    const saveGifs= async ()=>{
        const gifCollection = await getImage(category)
        setGifs(gifCollection)
        setIsLoading(false)
    }
    useEffect(() => {
        saveGifs()
    }, [])
  return{
    gifs,
    isLoading
  }
}
