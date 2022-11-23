import {Link} from "react-router-dom"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {productos} from "./Products"

function Objets({ title, img, price, id }) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <Card.Img src={productos.img} alt={title} />
        <Card.Text>
          ${price}
        </Card.Text>
        <Button variant="primary"></Button>
        <Link to={`/item/${id}`}>
          ver detalle
        </Link>
      </Card.Body>
    </Card>

  );
}


export default Objets;

