import { useState } from 'react'
import './App.css'
import InputShortener from './components/InputShortener';
import UrlShortener from './components/UrlShortener';

function App() {
  const [dataInput, setDataInput] = useState("");

  return (
    <div className='container'>
      <InputShortener setDataInput={setDataInput} />
      <UrlShortener dataInput={dataInput} />
    </div>
  )
}

export default App
