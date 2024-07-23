const apiKey = 'woAtBatY6emhh7hpLPmpiF2i2vQRH5W1'
const limite = 10
export const getImage = async (category) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limite}`)
        if (!response.ok) {
            throw new Error(`No se ha encontrado la categoria: ${category}`)
        }
        const { data } = await response.json()
        const images = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
        )
        return images

    } catch (error) {
        console.log(error)
    }
}