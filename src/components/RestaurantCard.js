import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function RestaurantCard({data}) {
  console.log(data);
  return (
    <Link style={{textDecoration:'none'}} to={`restaurant/${data.id}`}>
    <Card style={{height:"800px"}} >
    <Card.Img variant="top" className='p-3' src={data.photograph} />
    <Card.Body>

      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
 <p>  Cuisine:  {data.cuisine_type}</p> 
      </Card.Text>
      <Card.Text>
    <p> Neighborhood : {data.neighborhood} </p>
      </Card.Text>
      <Button variant="dark">view more</Button>
    </Card.Body>
  </Card>
  </Link>


  )
}

export default RestaurantCard