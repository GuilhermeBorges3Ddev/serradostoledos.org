import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="App-body" >
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>
              <h1 className="text-warning"><i>serradostoledos.org</i></h1>
            </CardTitle>
            <CardText className="under-construction-txt">
              <p>Ao responder o questionário saberemos o que a plataforma deve ter...</p>
              <p>Construiremos a plataforma com base nessas <u>respostas</u>!!!</p>
            </CardText>
            <Button>
                <a
                  className="App-link"
                  href="https://forms.gle/rbKdZStyWd5vVeVb6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clique para responder nosso questionário
                </a>
            </Button>
          </Card>
        </div>

      </header>
    </div>  
  );
}

export default App;
