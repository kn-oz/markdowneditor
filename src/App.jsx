import Description from './components/Description';
import RawInputArea from './components/RawInputArea'
import {MarkdownContext} from './context/MarkdownContext'
import MarkDownSanitized from './components/MarkdownSanitized';
import useLocalStorage from './hooks/useLocalStorage';

const defaultText = `**Enter Markdown**`

function App() {
  
const [rawText, setRawText] = useLocalStorage('markdown', defaultText)

const handleChange = (e) => {
  setRawText(
    e.target.value
  )
}

  return (
    <div className="App min-h-screen bg-gray-900 px-8 flex flex-wrap justify-start items-center">
    <MarkdownContext.Provider value={{rawText, handleChange}}>
      <div className="input-section">
        <Description />
        <RawInputArea />
      </div>
      <div className="output-section">
        <MarkDownSanitized />
      </div>
    </MarkdownContext.Provider>
    </div>
    
  )
}



export default App
