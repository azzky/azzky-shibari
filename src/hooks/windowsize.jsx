import { useState, useEffect, useCallback } from "react"

function useWidth() {
    const [width, setWidth] = useState(null)

    const updateWidth = useCallback(() => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth
        setWidth(width)
    }
    }, []);

    useEffect(() => {
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        };
    }, [updateWidth])

    return [width]
}

export default useWidth
