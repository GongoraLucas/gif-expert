import { useState } from "react"
export const AddCategorie = ({onNewCategory}) => {
    const [input, setInput] = useState("")
    const onInputChange = ({ target }) => {
        setInput(target.value)
    }
    const onSubmitInput = (event) => {
        event.preventDefault()
        if (input.trim().length <= 1) return;
        onNewCategory(input.trim())
        setInput('')
    }
    return (
        <>
            <form onSubmit={onSubmitInput}>
                <input
                    type="text"
                    value={input}
                    placeholder="Busca tu GIF"
                    onChange={onInputChange}
                />
            </form>
            
        </>
    )
}
