import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./menu";
import NavBarDash from "./navBarDash";
import General from "./general";
import Loading from "./loading";
import Gatos from "./gatos";
import Productos from "./productos";
import Ventas from "./ventas";
import Usuarios from "./users";
import { Modal } from "./modal";

export default function Dashboard (){

  const [view, setView] = useState("general")
  const [info , setInfo] = useState({
    users:[],
    cats:[],
    orders:[],
    products:[]
  })
  const [modal, setModal] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
    setModal(e)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModal("")
  };
  const getUser = JSON.parse(localStorage.getItem("userInfo"))
  const currentUser = getUser
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
    <>{currentUser.status === "superAdmin" ?
    <div className="bg-gray-100 flex" >
      <Menu click={clickHandlerMenu} openModal={openModal}></Menu>
      <div id="view" className=" flex-grow ">
    <NavBarDash props={currentUser}></NavBarDash>
    <div className=" w-full my-14 ">
    {info.cats.length===0 || info.users.length===0 || info.products.length===0 || info.orders.length===0  ? <Loading></Loading> : 
     view==="general" ?  <General cats={info?.cats} orders={info?.orders} users={info?.users} ></General> : 
     view==="gatos" ? <Gatos openModal={openModal} cats={info?.cats} ></Gatos> :
     view==="products" ? <Productos products={info?.products}></Productos> :
     view==="users" ?  <Usuarios users={info?.users}></Usuarios> :
     view==="orders" ? <Ventas orders={info.orders}></Ventas> : <Loading></Loading>
}
<Modal isOpen={isModalOpen} onClose={closeModal} formType={modal} ></Modal>
   </div>
      </div>
    </div> : <h1>No tenes permisos</h1>}
    </>
  )
}