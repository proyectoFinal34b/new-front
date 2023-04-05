import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../redux/actions'
import Paginado from "../card/paginado/paginado.jsx"
import gatos from './gatos';

export default function Card() {
  
  const dispatch = useDispatch();
   const cats =  useSelector(state => state.allCats); //gatos
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage, setcatsPerPage] = useState(8);
  const indexOfLastcat = currentPage * catsPerPage;
  const indexOfFirstcat = indexOfLastcat - catsPerPage;

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);
  console.log(cats)

  return (
    <div class="flex flex flex-col my-10">
  {Array.isArray(cats) ? cats.slice(indexOfFirstcat, indexOfLastcat).map(function(cat) {
    return (
      <div class="bg-white w-1/4 m-auto border-1 border-dashed border-gray-900 shadow-md rounded-lg overflow-hidden" key={cat.id}>
        <img src={cat.image} alt={cat.name} class="w-full h-15 object-cover object-center" />
        <div class="p-4">
          <p class="mb-1 text-gray-900 font-semibold">{cat.name}</p>

          <span class="text-gray-700">Edad: {cat.age}</span>

          <div class="mt-8 mb-3">
            <a href="/detail" class="px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400">Adoptar</a>
          </div>
        </div>
        
      </div>
    );
  }): <span>{cats}</span>}
    <div>
        <Paginado
         catsPerPage={catsPerPage}
          allcats={cats?.length}
          paginado={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
</div>
  );
};



