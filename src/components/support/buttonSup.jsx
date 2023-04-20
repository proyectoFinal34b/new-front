import React from "react";
import {Link} from 'react-router-dom'



export default function BotonSup() {
    return(
        <div>
            <Link to="/contacto">
            <button class="fixed bottom-0 right-0 p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 m-4">
            <img src="https://icons.veryicon.com/png/o/healthcate-medical/medical-system/customer-service-33.png" alt="" class="w-10 h-10"/>
            </button>
            </Link>
        </div>
    )
}