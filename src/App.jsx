import { useState } from 'react'
import styled from 'styled-components';
import './App.css'
import InputShortener from './components/InputShortener';
import UrlShortener from './components/UrlShortener';

function App() {
  const [dataInput, setDataInput] = useState("");

  return (
    <Container>
      <InputShortener setDataInput={setDataInput} />
      <UrlShortener dataInput={dataInput} />
    </Container>
  )
}

export default App

const Container = styled.div`
    background-color : white;
    border-radius: 8px;
    margin-inline: 400px;
    height: 400px;
`