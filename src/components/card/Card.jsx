import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../redux/actions'
import Paginado from "../card/paginado/paginado.jsx"
import Loader from '../dashboardAdmin/loading';

export default function Card() {
const stylesbtnCard="px-4 py-2 bg-teal-500 shadow-lg  rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-700 active:bg-teal-400"
  const dispatch = useDispatch();
  const cats = useSelector(state => state.allCats); //gatos
  const currentPage = useSelector(state => state.currentPage)
  const [catsPerPage, setcatsPerPage] = useState(9);
  const indexOfLastcat = currentPage * catsPerPage;
  const indexOfFirstcat = indexOfLastcat - catsPerPage;

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);
  console.log(cats)

  return (
    <>
      <div className='md:pr-3'>
        <div class=" my-10 sm:columns-2 xl:columns-3 lg:columns-3 ">
          {Array.isArray(cats) ? cats.slice(indexOfFirstcat, indexOfLastcat).map(function (cat) {
            return (
      <div>
                <div class="bg-slate-50 dark:bg-gray-900 mb-5 w-72 m-auto border-1 border-dashed border-gray-900 shadow-2xl rounded-lg overflow-hidden xl:w-10/12 xl:mb-14 lg:w-60 md:w-64 md:mb-4" key={cat.id}>
                  <p class="mb-3 text-gray-900 dark:text-gray-200 font-semibold text-3xl">{cat.name}</p>
                  <img src={cat.image} alt={cat.name} class="object-cover w-60 h-48 m-auto my-4 object-center xl:w-60 xl:h-60 md:w-60 md:h-44 md:-mb-2" />
                  <div class="p-4">
                    
                    <span className='text-gray-900 dark:text-gray-200 mr-5 xl:text-2xl'>{cat.state}</span>
                    <span class="text-gray-700 dark:text-gray-200 xl:text-2xl">Edad: {cat.age}</span>

                    <div class="mt-8 mb-3 md:flex md:flex-col space-y-4 ">
                      <a  href={`/gatos/${cat.id}`} className={stylesbtnCard}>Mi Historia</a>
                      <a  className={stylesbtnCard}>Adoptar</a>
                    </div>
                  </div>

                </div>
              </div>
            );
          }) : <Loader></Loader>}
    
</div>

        <Paginado
         elementsPerPage={catsPerPage}
          allelements={cats?.length}
        />
  </div>    
</>
  );
};



