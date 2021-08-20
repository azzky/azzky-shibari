import { useState } from "react"

const useCenzorship = () => {
    let localState = false
    if (typeof window !== 'undefined') {
        localState = localStorage.getItem('nsfw') === 'true' ? true : false
    }
    const [pageNsfw, setToggle] = useState(localState)

    const toggleNsfw = () => {
        setToggle((prev) => {
        localStorage.setItem('nsfw', !prev)
        return !prev
        })
    }

    return { pageNsfw, setToggle, toggleNsfw }
}

export default useCenzorship