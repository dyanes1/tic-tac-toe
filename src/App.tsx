import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default function App () {
  return (
    <Main>
      <TicTacToe/>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


//export default App;
