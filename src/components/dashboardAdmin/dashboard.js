import React, { useState, useEffect } from "react";
import Menu from "./menu";
import NavBarDash from "./navBarDash";
import Loading from "./loading";
import Gatos from "./gatos";
import Productos from "./productos";
import Ventas from "./ventas";
import Usuarios from "./users";
import { Modal } from "./modal";
import llamados from "./logic/llamados";

export default function Dashboard ({handlerDarkMode , darkMode}){

  const [view, setView] = useState("gatos")
  const [info , setInfo] = useState({
    users:[],
    cats:[],
    orders:[],
    products:[]
  })
  const [modal, setModal] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    console.log(e)
      setIsModalOpen(true);
      setModal(e)
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModal("")
  };
  const getUser = JSON.parse(localStorage.getItem("userInfo"))
  const currentUser = getUser
 
  const updateHandler = () =>{
    llamados(setInfo)
  }

  const clickHandlerMenu = (view)=>{
    return setView(view)
  }

  useEffect(()=>{
  llamados(setInfo)

  },[])

  useEffect(()=>{

  },[info])
  
  return (
    <>{currentUser?.status === "superAdmin" || currentUser?.status === "admin"?
    <div className="bg-gray-100 dark:bg-bgDark " >
      <div>
    <NavBarDash handlerDarkMode={handlerDarkMode} darkMode={darkMode} props={currentUser}></NavBarDash></div>
      <div className="flex">

      <Menu updateHandler={updateHandler} click={clickHandlerMenu} openModal={openModal}></Menu>
      <div id="view" className=" flex-grow ">
        
    <div className=" w-full my-14 ">
    {info.cats.length===0 || info.users.length===0 || info.products.length===0 || info.orders.length===0  ? <Loading></Loading> : 
     view==="gatos" ? <Gatos openModal={openModal} cats={info?.cats} ></Gatos> :
     view==="products" ? <Productos products={info?.products} openModal={openModal}></Productos> :
     view==="users" ?  <Usuarios openModal={openModal} users={info?.users}></Usuarios> :
     view==="orders" ? <Ventas openModal={openModal} orders={info.orders}></Ventas> : <Loading></Loading>
}
<Modal isOpen={isModalOpen} onClose={closeModal} formType={modal} ></Modal>
   </div>
      </div>
      </div>
    </div> : <h1>No tenes permisos</h1>}
    </>
  )
}