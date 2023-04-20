import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getProductsById,
  addToCart,
  getProduct,
  loadCart,
} from "../../../redux/actions";
import HoverRating from "../../productos/rating/rating";
import Loader from "../../dashboardAdmin/loading";
import CarruselProduct from "../../Carrusel/CarruselProd";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";



export default function DetailProductosFilter(props) {
  const carrito = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productsById);
  const [disabled, setDisabled] = useState(false);
  const [renderPage, setRenderPage] = useState();
  const { id } = useParams();

  const { user:userAuth0, isAuthenticated } = useAuth0(); 

  useEffect(() => {
    dispatch(getProductsById(id));
    dispatch(getProduct());
  }, [dispatch, id]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("carrito"));
    if (local?.length) {
      dispatch(loadCart(local));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "carritolength",
      JSON.stringify(carrito?.items.length)
    );
    productCuantity();
    console.log(carrito.items[0]?.quantity);
  }, [carrito]);

  function productCuantity() {
    let producto = carrito?.items.find((e) => e.id === productId.id);
    if (producto) {
      if (producto.quantity < productId.stock) setDisabled(false);
      else setDisabled(true);
    } else setDisabled(false);
  }

  const mostrarAlerta = () => {
    Swal.fire({
      title: "Inicie sesión antes de comprar",
      text: "Para agregar productos al carro debes iniciar sesión",
      icon: "warning",
      confirmButtonText: "Iniciar sesión",
      confirmButtonColor: "#b6ece5",
      position: "top",
    }).then((response) => {
      if (response.isConfirmed) {
        window.location.href = "/login";
      }
    });
  };

  async function agregarAlCarro() {
    if (JSON.parse(localStorage.getItem("userInfo"))||isAuthenticated) {
      dispatch(addToCart(productId.id));
      localStorage.setItem("carrito", JSON.stringify(carrito?.items));

      productCuantity();
    } else mostrarAlerta();
  }
if(productId?.ratings){
 let count = 0
productId.ratings?.map(a=>count += parseInt(a.rated))
console.log(count)
 var currentRating = count / productId?.ratings?.length
}

  return (
    <>
      {/* DIV GENERAL */}

      <div className="xl:w-3/5 lg:w-2/3 sm:w-3/5 sm:p-5 w-full m-auto rounded-sm bg-slate-300 shadow-xl dark:bg-slate-600 dark:text-white p-5  mb-20 mt-20 flex flex-col items-center dark:shadow-xl">
        {productId?.length !== 0 ? (
          <>
            <div className="">
              <div className="flex flex-col lg:flex-row justify-center items-center p-10 ">
                <div className="flex w-3/6">
                  <img
                    src={productId.image}
                    alt={productId.name}
                    className="w-96 lg:w-full rounded-md object-contain m-auto shadow-md dark:shadow-md"
                  />
                </div>
                <div className="lg:ml-32">
                  <div>
                    <h1 className="font-semibold text-3xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-white p-3 -mt-2">
                      {productId.name}
                    </h1>
                  </div>
                  <div>
                    <h1 className="dark:text-white mb-5">
                      Estrellitas de Ranking
                    </h1>
                  </div>

                  {/* DIV DEL PRECIO Y DESCUENTO */}
                  <div>
                    <div className="">
                      {productId.discount?.active ? (
                        <div>
                          <span className="text-sm line-through dark:text-white ">
                            {"$" + productId.price}
                          </span>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className=" items-center flex justify-center ">
                        <span className="text-3xl font-bold dark:text-white px-4">
                          {"$" +
                            (productId.price -
                              (productId.discount?.value / 100) *
                                productId.price)}
                        </span>

                        <span className="bg-green-500 px-1.5 py-0.5 text-center items-center rounded-md text-lg text-white">
                          save {productId.discount?.value}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <h1 className="dark:text-white text-xl mt-5 ">
                    Stock Disponible
                  </h1>
                  <div className="text-lg font-bold dark:text-white mb-5">
                    Stock: {productId.stock}
                  </div>
                  <button
                    disabled={disabled}
                    onClick={() => agregarAlCarro()}
                    className="bg-green-500 dark:text-white font-bold  rounded-md  w-full h-12 flex justify-center items-center text-black "
                  >
                    {disabled ? "Sin Stock" : "Agregar al carro"}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-shopping-cart-plus"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                      <path d="M15 6h6m-3 -3v6" />
                    </svg>
                  </button>

                  <HoverRating id={productId.id}/>
                    Rating actual: {Math.ceil(currentRating)} entre {productId?.ratings?.length} reviews
                </div>
              </div>
            </div>
            <div className="dark:text-white text-black p-10 flex justify-center items-center text-center text-lg w-5/6">
              Descripción: {productId.summary}
            </div>
            <div className="bg-gray-800 mt-10 w-full shadow-md hidden xl:inline">
            <h1 className="font-extrabold text-2xl h-12 items-center m-auto justify-center flex text-white shadow-md">Sigue Viendo Nuestros Productos</h1>
            <CarruselProduct/>
        </div>
          </>
        ) : (
          <Loader></Loader>
        )}
      </div>
    </>
  );
}
