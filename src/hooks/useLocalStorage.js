import { useState, useEffect } from "react";

function getMarkdown(key, initialValue) {
    const localMarkdown = JSON.parse(localStorage.getItem(key))

    if (localMarkdown) return localMarkdown

    if (localMarkdown instanceof Function) return localMarkdown()
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [markdown, setMarkdown] = useState(() => {
        return getMarkdown(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(markdown))
    }, [markdown])

    return [markdown, setMarkdown]
}