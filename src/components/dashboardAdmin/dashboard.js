import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./menu";
import NavBarDash from "./navBarDash";
import General from "./general";
import Loading from "./loading";
import Gatos from "./gatos";
import Productos from "./productos";
import Ventas from "./ventas";
import Usuarios from "./users";

export default function Dashboard (){

  const [view, setView] = useState("general")
  const [info , setInfo] = useState({
    users:[],
    cats:[],
    orders:[],
    products:[]
  })
/*   const currentUser = useSelector(state=>state.currentUser) */
const currentUser = {
	name: "Juje",
	password: "superAdmin",
	lastName: "Gramajo",
	email : "superadmin@gmail.com",
	phoneNumber : 12516,
	active:true,
	sponsor: [1,2,3],
	image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/16/17494470-1666268773668153-4913147535255666688-n.jpg?quality=75&width=1200&auto=webp",
	order : [1,2,3],
	status : "superAdmin"
}
  const users = async ()=>{
    const response = await axios.get("http://localhost:3001/user")
    setInfo(prevState=>({...prevState, users: response.data}))
  }
  const cats = async () => {
    const response = await axios.get("http://localhost:3001/cat/")
    setInfo(prevState => ({...prevState, cats: response.data}))
  }
  const orders = async () => {
    const response = await axios.get("http://localhost:3001/order/")
    setInfo(prevState => ({...prevState, orders: response.data}))
  }
  const products = async () => {
    const response = await axios.get("http://localhost:3001/product")
    setInfo(prevState => ({...prevState, products:response.data}))  
  }

  const clickHandlerMenu = (view)=>{
    return setView(view)
  }

  useEffect(()=>{
    orders()
    cats()
    products()
    users()
  },[])
  console.log(info, view)
  return (
    <>{currentUser?.status === "superAdmin" ?
    <div className="bg-gray-100 flex" >
      <Menu click={clickHandlerMenu}></Menu>
      <div id="view" className=" flex-grow ">
    <NavBarDash props={currentUser}></NavBarDash>
    <div className=" w-full ">
    {info.cats.length===0 || info.users.length===0 || info.products.length===0 || info.orders.length===0  ? <Loading></Loading> : 
     view==="general" ?  <General cats={info?.cats} orders={info?.orders}></General> : 
     view==="gatos" ? <Gatos cats={info?.cats}></Gatos> :
     view==="products" ? <Productos></Productos> :
     view==="users" ?  <Usuarios></Usuarios> :
     view==="orders" ? <Ventas></Ventas> : <Loading></Loading>
}   </div>
      </div>
    </div> : <h1>No tenes permisos</h1>}
    </>
  )
}