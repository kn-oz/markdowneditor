import { useContext } from "react";
import { MarkdownContext } from "../context/MarkdownContext";


export default function useMarkdown() {
    return useContext(MarkdownContext)
}