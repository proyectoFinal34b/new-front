import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./menu";
import NavBarDash from "./navBarDash";
import General from "./general";

export default function Dashboard (){

  const [view, setView] = useState("general")
  const dispatch = useDispatch()
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

  return (
    <>{currentUser?.status === "superAdmin" ?
    <div className="bg-gray-100 flex" >
      <Menu></Menu>
      <div id="view" className=" flex-grow ">
    <NavBarDash props={currentUser}></NavBarDash>
    <General></General>
      </div>
    </div> : <h1>No tenes permisos</h1>}
    </>
  )
}