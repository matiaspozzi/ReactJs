import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productos } from './components/Products';



function Objets() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Title>{productos.Title} </Card.Title>
        <Card.Text>
          {productos.price}
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Objets;

