import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FormularioEditUser({ closeModal }) {
  const id = localStorage.getItem("userIdEdit");
  const getUser = JSON.parse(localStorage.getItem("userInfo"));
  const currentUser = getUser;
  const idAdmin = currentUser.id;

  const [input, setInput] = useState({
    active: false,
    status: "",
  });
  useEffect(() => {
    async function fecthUser() {
      try {
        const userFound = await axios
          .get(`/user/${id}`)
          .then((res) => res.data);
        setInput({
          active: userFound.active,
          status: userFound.status,
        });
      } catch (error) {
        alert(error);
      }
    }
    fecthUser();
  }, [id]);
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .put(`/user/${id}/admin/${idAdmin}`, input)
      .then((res) => alert(res.data.message))
      .catch((res) => alert(res.response.data));
    closeModal();
  };
  return (
    <>
      <div className="bg-slate-200 m-auto rounded-sm w-96 h-52">
        <form onSubmit={submitHandler}>
          <h1 className="font-medium text-2xl py-3 shadow-md">
            Editar usuario
          </h1>
          <div className="flex flex-col space-y-5 mt-4 m-auto h-full justify-center items-center">
            <label>
              Activo:
              <select
                className="border border-slate-300 rounded-sm"
                name="active"
                value={input.active}
                onChange={(e) => {
                  setInput({
                    ...input,
                    [e.target.name]: !input[e.target.name],
                  });
                }}
              >
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </label>
            <label>
              Permisos:
              <select
                className="border border-slate-300 rounded-sm"
                name="status"
                value={input.status}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
              >
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
                <option value="superAdmin">SuperAdministrador</option>
              </select>
            </label>
            <div>
              <input
                type="submit"
                className="ml-2 px-4 py-2 font-medium text-gray bg-teal-400 rounded-md hover:bg-teal-500 "
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
