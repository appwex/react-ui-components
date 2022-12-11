import CodeEditor from '@uiw/react-textarea-code-editor'
import './code-writer.css'
import { useState } from 'react'
const CodeWriter = () => {
  const [code, setCode] = useState(
    `
    // using props 

    const cart = (props) => {
        <p>{props.cartNumber}</p>
    }
        
    //object destructuring
    
    const cart = ({cartNumber}) => {
        <p>{cartNumber}</p>
    }`
  )
  const [darkMode, setdarkMode] = useState(false)
  return (
    <div className="codeWriter">
      <CodeEditor
        value={code}
        onChange={evn => setCode(evn.target.value)}
        language="jsx"
        tabIndex={5}
        padding={15}
        className={`editorContainer ${
          darkMode ? 'editorDarkBg' : 'editorWhiteBg'
        }`}
      />
      <div className="codeTitle">
        <div className="dots">
          <span />
          <span />
          <span />
        </div>
        <input placeholder="Code Title" type="text" />
      </div>
      <div className={`darkMode ${darkMode ? 'whiteBg' : 'darkBg'}`}>
        <span
          className={`${darkMode ? 'slide' : ''}`}
          onClick={() => setdarkMode(!darkMode)}
        />
      </div>
    </div>
  )
}

export default CodeWriter
