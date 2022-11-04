import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Objets({title, price}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Objets;

