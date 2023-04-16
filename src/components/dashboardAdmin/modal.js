import React from "react";
import PostCats from "../form/FormularioCreacion";
import PostProduct from "../productos/form/formulario";

export const Modal = ({ isOpen, onClose, formType }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="modal-overlay bg-gray-900 bg-opacity-75 fixed inset-0"
        onClick={onClose}
      />
      <div className="modal-content bg-white rounded-lg shadow-lg p-6 overflow-auto">
        {formType === "añadirGato" ? (
          <div className="relative z-50">
            <PostCats />
          </div>
        ) : formType === "añadirProducto" ? (
          <div className="relative z-50">
            <PostProduct />
          </div>
        ) : formType === "editGatos" ? (
                    <div className="relative z-50">
            <PostCats />
          </div>
        ) :
        (
          ""
        )}
      </div>
    </div>
  ) : null;
};
