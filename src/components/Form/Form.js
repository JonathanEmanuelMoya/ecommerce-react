import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
    }

    const handleKeyDown = (event) => {
        console.log(event)
        if(event.code === 'Space') {
            event.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form 