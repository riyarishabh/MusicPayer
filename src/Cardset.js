import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';

import Cards from './Cards';
function CardSet() {
  return ( 
    <div>
      <Container>
        <CardDeck>
            <Cards />
            <Cards />
            <Cards />
        </CardDeck>
      </Container>
      <Container>
        <CardDeck>
            <Cards />
            <Cards />
            <Cards />
        </CardDeck>
      </Container>
    </div>
    
    
  );
}
export default CardSet;