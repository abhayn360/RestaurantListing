import React from 'react'
import{useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch,useSelector} from 'react-redux'
import { restaurantList } from '../Actions/restAction';
function Home() {

   const dispatch= useDispatch()

   const result=useSelector(state=>state.restReducer)
   let {restaurant}=result
   console.log(restaurant);


useEffect(()=>{
    dispatch(restaurantList())
},[])

  return (
    <Row className="px-3" >

    {
restaurant.map(restaurant=>(
  <Col className="py-3 px-2" sm={12} md={8} lg={4} xl={3}>
   <RestaurantCard data={restaurant} />
  </Col>
))
}
</Row>

  )
}

export default Home