import React from 'react'
import Productcard from '../productcard/productcard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../../redux/actions'
import Loader from '../../dashboardAdmin/loading'

export default function Renderizados(props) {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.allProducts)
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
  return (
    <div className="">
             {products?.length?products
            .slice(props.indexOfFirstproduct, props.indexOfLastproduct)
            .map((e)=><Productcard 
            key={e.id}
            name={e.name}
            image={e.image}
            price={e.price}
            ratings={e.ratings}
            discount={e.discount}
            stock={e.stock}
            id={e.id}
            />)
            :
            <Loader></Loader>}
        </div>
  )
}
