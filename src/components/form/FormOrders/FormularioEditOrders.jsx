import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FormularioEditOrders({ closeModal }) {
  const id = localStorage.getItem("orderId");
  const getUser = JSON.parse(localStorage.getItem("userInfo"));
  const currentUser = getUser;
  const idAdmin = currentUser.id;

  const [input, setInput] = useState({
    delivery: "",
    status: "activo",
  });

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios
          .get(`/order/${id}/`)
          .then((res) => res.data);

        setInput({
          delivery: response.delivery,
          status: response.status,
        });
      } catch (error) {
        alert(error);
      }
    }

    fetchOrder();
  }, []);

  const handlerChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`/order/${id}/admin/${idAdmin}`, input)
      .then((res) => (alert(res.data.message), console.log(res)))
      .catch((res) => (alert(res), console.log(res)));
    closeModal();
  };

  return (
    <>
      <div className="bg-slate-200 m-auto rounded-sm w-96 h-52">
        <form onSubmit={handleSubmit}>
          <h1 className="font-medium text-2xl py-3 shadow-md">Editar ventas</h1>
          <div className="flex flex-col space-y-5 mt-4 m-auto h-full justify-center items-center">
            <div>
              {" "}
              Delivery :
              <select
                className="border border-slate-300 rounded-sm"
                name="delivery"
                value={input.delivery}
                onChange={handlerChange}
              >
                <option value="proceso">En proceso</option>
                <option value="cancelado">Cancelado</option>
                <option value="entregado">Entregado</option>
              </select>
            </div>
            <div>
              {" "}
              Activo:
              <select
                className="border border-slate-300 rounded-sm"
                name="status"
                value={input.status}
                onChange={handlerChange}
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
            <input
              type="submit"
              className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 "
            ></input>
          </div>{" "}
        </form>
      </div>
    </>
  );
}
