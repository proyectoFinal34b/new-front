import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../redux/actions'
import Paginado from "../card/paginado/paginado.jsx"

export default function Card() {
  
  const dispatch = useDispatch();
   const cats =  useSelector(state => state.allCats); //gatos
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage, setcatsPerPage] = useState(9);
  const indexOfLastcat = currentPage * catsPerPage;
  const indexOfFirstcat = indexOfLastcat - catsPerPage;

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);
  console.log(cats)

  return (
    <>
    <div className=''>
    <div class=" my-10 sm:columns-2 xl:columns-3 lg:columns-3">
  {Array.isArray(cats) ? cats.slice(indexOfFirstcat, indexOfLastcat).map(function(cat) {
    return (
      <div>
      <div class="bg-white mb-5 w-72 m-auto border-1 border-dashed border-gray-900 shadow-2xl rounded-lg overflow-hidden md:w-64 md:mb-4" key={cat.id}>
        <img src={cat.image} alt={cat.name} class="object-cover w-60 h-48 m-auto my-4 object-center md:w-52 md:h-40" />
        <div class="p-4">
          <p class="mb-1 text-gray-900 font-semibold">{cat.name}</p>

          <span class="text-gray-700">Edad: {cat.age}</span>

          <div class="mt-8 mb-3">
            <a href="/detail" class="px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400">Adoptar</a>
          </div>
        </div>
        
      </div>
      </div>
    );
  }): <span>{cats}</span>}
    
</div>

        <Paginado
         elementsPerPage={catsPerPage}
          allelements={cats?.length}
          paginado={setCurrentPage}
          currentPage={currentPage}
        />
  </div>    
</>
  );
};



