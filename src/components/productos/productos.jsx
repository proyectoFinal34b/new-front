import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../home/footer/footer";
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../card/paginado/paginado";
import ProductFiltrados from "./filtros tienda/filtrosT";
import Renderizados from "./productos renderizados/renderizados";
import BotonSup from "../support/buttonSup";

export default function ProductosRender({handlerDarkMode, darkMode}) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [prueba, setPrueba] = useState(false);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, prueba]);
  const currentPage =useSelector(state=>state.currentPage)
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastproduct = currentPage * productsPerPage;
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;

  return (
    <>
      <Navbar darkMode={darkMode} handlerDarkMode={handlerDarkMode} />
      <div className="md:grid grid-cols-4">
        <div className=" lg:sticky top-3 justify-between items-center px-3 p-3 md:col-span-1 w-full md:sticky md:top-3 md:w-full">
          <ProductFiltrados setPrueba={setPrueba} prueba={prueba} />
        </div>

        <div className=" md:col-span-3 sm:columns-2 xl:columns-3 lg:columns-3 md:mt-5">
          <Renderizados
            indexOfFirstproduct={indexOfFirstproduct}
            indexOfLastproduct={indexOfLastproduct}
          />
        </div>
      </div>
      <Paginado
        elementsPerPage={productsPerPage}
        allelements={products?.length}
      />
      <BotonSup/>
      <Footer />
    </>
  );
}

