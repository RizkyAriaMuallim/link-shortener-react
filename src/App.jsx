import { useState } from 'react'
import './App.css'
import InputShortener from './components/InputShortener'

function App() {
  const [dataInput, setDataInput] = useState("");

  return (
    <div className='container'>
      <InputShortener setDataInput={setDataInput} />
    </div>
  )
}

export default App
