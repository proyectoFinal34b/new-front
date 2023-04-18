import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, loadCart } from "../../../redux/actions";
import Swal from "sweetalert2";

export default function Productcard(props) {
  const carrito = useSelector((state) => state.cart);
  const [state, setState] = useState(true)
  const dispatch = useDispatch();

  //  useEffect(() => {
  //    // guardar los datos del carrito en localStorage al actualizar el carrito
 
  //  }, [state]);
  useEffect(() => {
    const local= JSON.parse(localStorage.getItem("carrito"))
    if(local?.length) {
      dispatch(loadCart(local))
    }
  }, []);

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

  async function agregarAlCarro(id) {
   if(JSON.parse(localStorage.getItem('userInfo'))){
    dispatch(addToCart(id))
    setState(!state)
    localStorage.setItem("carrito", JSON.stringify(carrito?.items));
  } else mostrarAlerta()
}
  return (
    <div className="flex m-auto mb-3 w-72 md:w-64 md:mb-4 2xl:w-96 ">
      <div className="bg-white w-full text-gray-700 sm:min-h-[524px] dark:bg-gray-900 lg:min-h-[524px] 2xl:min-h-[605px] md:min-h-[34-rem] min-h-[31rem] shadow-lg rounded-md overflow-hidden md:w-96 md:mb-4 ">
        {/* imagen */}
        <img
          src={props.image}
          alt=""
          className="w-60 h-48 m-auto my-4 object-fill md:w-40 md:h-40 md:mb-4 2xl:w-64 2xl:h-64 rounded-md"
        />
        <div className="p-5 flex flex-col gap-3 ">
          {/* tipo de producto */}
          <div className="flex justify-center items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
              Juguete
            </span>
          </div>
          <hr className="h-px my-3 bg-gray-900 border-0 dark:bg-gray-300"></hr>
          {/* titulo */}
          <h3 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-white">
            {props.name}
          </h3>
          {/* precios */}
          <div>
            <span className="text-xl font-bold dark:text-white">
              {"$" +
                (props.price - (props.discount?.value / 100) * props.price)}
            </span>
            <div className="flex items-center gap-1 mt-4 justify-evenly dark:text-white">
              {props.discount.active ? (
                <div>
                  <span className="text-sm line-through opacity-50 ">
                    {"$" + props.price}
                  </span>
                  <span className="bg-green-500 mx-2 px-1.5 py-0.5 rounded-md text-xs text-white">
                    save {props.discount.value}%
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-sm line-through opacity-50 text-gray-900">
                    
                  </span>
                  <span className=" mx-2 px-1.5 py-0.5 rounded-md text-xs text-gray-900">
                    
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* rating */}
          <span className="flex items-center mt-1">{props.ratings}</span>
          {/* button */}
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => agregarAlCarro(props.id)}
              className="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition"
            >
              Agregar al carro
            </button>
            <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
              <img
                class="opacity-50 w-6"
                src="https://cdn-icons-png.flaticon.com/512/109/109791.png"
                alt=""
              />
            </button>
          </div>
          <a
            href={`/productos/${props.id}`}
            class="bg-teal-500/80 hover:bg-teal-500/90 px-6 py-2 rounded-md text-white font-medium tracking-winder transition"
          >
            Detalle
          </a>
        </div>
      </div>
    </div>
  );
}
