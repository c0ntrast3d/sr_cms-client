import React from 'react';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Container } from "shards-react";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <h1>Hello</h1>
      </Container>

    </div>
  );
}

export default App;
