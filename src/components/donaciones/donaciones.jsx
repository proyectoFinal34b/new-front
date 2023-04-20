import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import '../donaciones/styleDonated.css'
import BotonSup from "../support/buttonSup";





export default function DonacionesRender({handlerDarkMode, darkMode}) {

  const navigate= useNavigate()


    return (
      <div>
        <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode}/>
        <div className="leading-normal tracking-normal text-white gradient">
        <div className="container flex flex-row justify-between items-center py-32">
            <div className="w-[32%] flex flex-col space-y-12">
                <div className="text-gray-800">
                    <h2 className="font-semibold text-xl uppercase">Donaciones</h2>
                   <p className="font-medium text-[17px] font-sans mt-3">Tu colaboracion sera destina para ayudar a cubrir los costos asociados con el cuidado de los gatos que se encuentran en el refugio. Esto puede incluir alimentos, suministros médicos, cuidados veterinarios, alojamiento, 
                   juguetes y otros artículos necesarios para mantener a los gatos felices y saludables mientras esperan ser adoptados.</p >
                </div>
                <p className="font-medium text-gray-500 font-sans mt-3">Ademas contamos con una tienda en la cual puedes comprar productos y la mitad del 
                    dinero tambien sera destina a ayudar a estos hermosos animales.
                </p >
                <div className="flex items-center">
                    <div className="w-3/5">
                        <a href="/productos" className="relative inline bg-[#2b2b2b] font-semibold text-lg py-3 px-10 rounded-lg capitalize shadow-one hover:bg-[#37c6b6] hover:text-gray-800 group">
                            <div class="absolute -top-0 -right-1 w-10 h-full bg-[#2b2b2b] transform -skew-x-[25deg] rounded-tr-xl rounded-br-md group-hover:bg-[#3fedd9]"></div>
                            Ir a la tienda
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[30%] flex flex-col items-center">
                <div className="leading-[.8] text-teal-400 text-center flex flex-col space-y-6">
                    <h1 className="text-[106px] uppercase font-[Poppins]">Bastet</h1>
                    <p className="text-5xl uppercase text-teal-600 font-[Poppins]">exceso de mimos</p>
                </div>
                <div className="w-full h-[435px] mt-4 hover:scale-105 transition-all">
                    <img src="https://i.pinimg.com/originals/28/fe/fd/28fefd8eba5167f55645cdaa7e6cd5bf.png"  className="w-full h-full object-cover drop-shadow-one"/>
                </div>
            </div>
            <div className="w-[30%] flex flex-col items-end space-y-32">
            <div className="relative w-[45%] pt-4 pb-6 px-4 leading-normal text-[#0d5958] bg-[#37c6b6] rounded-xl shadow-one z-30 hover:scale-110 transition-all">
                  <button onClick={() => navigate('/pasarela?monto=1000')}>
                    <div className="absolute -top-[30px] left-0 h-20 w-[148px] transform skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-10 bg-[#42cfbf] shadow-two"></div>
                    <div className="absolute -top-10 right-4 font-bold text-sm">01</div>
                    <p className="uppercase text-sm font-bold mb-3">Donar</p>
                    <h2 className="text-[24px] font-bold leading-[.8]">$1000</h2>
                    </button>
                </div>
                <div className="relative w-[45%] pt-4 pb-6 px-4 leading-normal text-[#0d5958] bg-[#37c6b6] rounded-xl shadow-one z-30 hover:scale-110 transition-all">
                  <button onClick={() => navigate('/pasarela?monto=2000')}>
                    <div className="absolute -top-[30px] left-0 h-20 w-[148px] transform skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-10 bg-[#42cfbf] shadow-two"></div>
                    <div className="absolute -top-10 right-4 font-bold text-sm">02</div>
                    <p className="uppercase text-sm font-bold mb-3">Donar</p>
                    <h2 className="text-[24px] font-bold leading-[.8]">$2000</h2>
                    </button>
                </div>
                <div className="relative w-[45%] pt-4 pb-6 px-4 leading-normal text-[#0d5958] bg-[#37c6b6] rounded-xl shadow-one z-30 hover:scale-110 transition-all">
                 <button onClick={() => navigate('/pasarela?monto=3000')}>
                    <div className="absolute -top-[30px] left-0 h-20 w-[148px] transform skew-y-[155deg] rounded-tl-xl rounded-tr-3xl -z-10 bg-[#42cfbf] shadow-two"></div>
                    <div className="absolute -top-10 right-4 font-bold text-sm">03</div>
                    <p className="uppercase text-sm font-bold mb-3">Donar</p>
                    <h2 className="text-[24px] font-bold leading-[.8]">$3000</h2>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <BotonSup/>
    <Footer/>
      </div>
    );
  }
