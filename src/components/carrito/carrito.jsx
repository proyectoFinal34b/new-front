import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import {
  delFromCart,
  clearCart,
  addToCart,
  totalamount,
  loadCart,
} from "../../redux/actions";
import { NavLink } from "react-router-dom";

export default function Cart(props) {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(false);
  const carrito = useSelector((state) => state.cart);

  useEffect(() => {
    const local= JSON.parse(localStorage.getItem("carrito"))
    if(local?.length) {
      dispatch(loadCart(local))
      setTotalAmount(!totalAmount);
    }
  }, []);

  useEffect(() => {
    // guardar los datos del carrito en localStorage al actualizar el carrito
    localStorage.setItem("carrito", JSON.stringify(carrito?.items));
  }, [carrito]);

  function removeAll(id) {
    dispatch(delFromCart(id, true));
    setTotalAmount(!totalAmount);
    // saveLocal()
  }
  function limpiarCarrito() {
    dispatch(clearCart());
    setTotalAmount(!totalAmount);
    // saveLocal()
  }
  function addOne(id) {
    dispatch(addToCart(id));
    setTotalAmount(!totalAmount);
   // setCartState(carrito.items)
  }
  function removeOne(id) {
    dispatch(delFromCart(id));
    setTotalAmount(!totalAmount);
    // saveLocal()
  }
  useEffect(() => {
    // localStorage.setItem("carrito", JSON.stringify(carrito.items));
    dispatch(totalamount());
  }, [dispatch, totalAmount]);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 shadow-md">
                      <div className="flex items-start justify-between shadow-md">
                        <Dialog.Title className="text-lg font-medium text-gray-900 ">
                          Carrito de compras
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => props.setModal(null)}
                          >
                            <span className="sr-only">Close panel</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {carrito?.items?.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.name}</h3>
                                      {item.quantity === 1 ? (
                                        <p className="ml-4">${(item?.price-(item.discount?.value/100)*item?.price)}.00</p>
                                        ) : (
                                          <p className="ml-4">
                                            ${(item?.price-(item.discount?.value/100)*item?.price)}.00 x {item.quantity}= $
                                            {(item?.price-(item.discount?.value/100)*item?.price) * item.quantity}.00
                                          </p>
                                        )}
                                      </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Cantidad
                                      <div className="flex justify-between border-solid border-slate-400 border-2 ">
                                        <button
                                          onClick={() => removeOne(item.id)}
                                        >
                                          ➖
                                        </button>
                                        <p className="text-base">
                                          {item.quantity}
                                        </p>
                                        
                                        <button onClick={() => addOne(item.id)} disabled={item.quantity===item.stock}>
                                          ➕
                                        </button>
                                      </div>
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => removeAll(item.id)}
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center mb-4">
                      <button
                        onClick={() => limpiarCarrito()}
                        className="flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Limpiar Carrito
                      </button>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${carrito.total}.00</p>
                      </div>
                      <div className="mt-6">
                      <NavLink
                          to="/pasarela"
                          className="flex items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Ir a Comprar
                        </NavLink>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          o
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => props.setModal(false)}
                          >
                            Ver más productos
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
