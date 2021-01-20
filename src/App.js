import React from 'react';
import { Container, Button, Badge} from 'react-bootstrap';

import CardSet from './Cardset';
import Navhead from './Navhead';

import './styles.css'

export default function App() {
  return (
    <div className="App">
      <Navhead />
      <Container fluid className="box">
      
      </Container>
      <div className="recom"><Badge pill variant="primary">Recommendations</Badge></div>
      <CardSet />
    </div>
  );
}
