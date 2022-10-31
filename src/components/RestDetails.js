import React from 'react'
import{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
function RestDetails() {
    const[restaurantsList,setRestaurantsList]=useState([])
    const params= useParams()
      // for modal
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
        // collapse
    const [open, setOpen] = useState(false);

    //async n await
   async function fetchData(){
   await fetch('/restaurants.json')
   .then(results=> results.json()
   .then(data=>{
    setRestaurantsList(data.restaurants);
   }))

    }
useEffect(()=>{
    fetchData()
},[])

const restaurant= restaurantsList.find(restDetail=>restDetail.id==params.id)



console.log(restaurant);

  return (
    <>
    {
      restaurant?
       
        <Row>
        <Col md={3}>
<Image src={restaurant.photograph} fluid/>

        </Col>

        <Col md={4}>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.neighborhood}</p>
        </ListGroup.Item>        
      <ListGroup.Item>Cuisine:{restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{restaurant.address}</ListGroup.Item>
    </ListGroup>
     {/* operating Hours*/}
     <Button className='my-3 text-black' variant="light" onClick={handleShow}>
    Operating Hours
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{restaurant.operating_hours['Monday']}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{restaurant.operating_hours['Tuesday']}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{restaurant.operating_hours['Wednesday']}</ListGroup.Item>
      <ListGroup.Item>Thursday:{restaurant.operating_hours['Thursday']}</ListGroup.Item>
      <ListGroup.Item>Friday:{restaurant.operating_hours['Friday']}</ListGroup.Item>
      <ListGroup.Item>Saturday:{restaurant.operating_hours['Saturday']}</ListGroup.Item>
      <ListGroup.Item>Sunday:{restaurant.operating_hours['Sunday']}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>  
      </Modal>
      <br></br>
        {/* reviews */}
        <Button variant='light' className='text-black'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view the reviews
      </Button>
      <Collapse in={open}>
        <div className='py-3' id="example-collapse-text">
          {
            restaurant.reviews.map(item=>(
              <div>
                <h6>{item.name}:<span>({item.date})</span></h6>
                <p className='text-black'>Rating:{item.rating}</p>
                <p className=''>Comments:{item.comments}</p>
              </div>
            ))
          }
        </div>
      </Collapse>

        </Col>

    
        </Row>:'null'




    }

</>


  )
}

export default RestDetails