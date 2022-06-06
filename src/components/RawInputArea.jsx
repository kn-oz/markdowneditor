import useMarkdown from "../hooks/useMarkdown"

export default function RawInputArea({}) {

    const markdown = useMarkdown()
    return (
        <div className="markdown-input p-20">
            <textarea className="bg-slate-700 text-white " name="markdown-input" id="" cols="60" rows="20" value={markdown.rawText} onChange={markdown.handleChange}>
            </textarea>
        </div>
    )
}