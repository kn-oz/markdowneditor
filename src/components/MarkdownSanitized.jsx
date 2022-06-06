import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useMarkdown from '../hooks/useMarkdown'

export default function MarkDownSanitized() {
    const markdown = useMarkdown()
    return (
        <div className="markdown-output text-white pt-24">
            <h2 className="font-semibold font-mono text-4xl"> Markdown Output </h2>
            <div className="output mt-4 p-2">
                <ReactMarkdown children={markdown.rawText} remarkPlugins={[remarkGfm]}></ReactMarkdown>
            </div>
        </div>
    )
}