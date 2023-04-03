import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../redux/actions'

export default function Card() {
  const dispatch = useDispatch();
  const cats = useSelector(state => state.allCats);

  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  return (
    <div>
      {cats.map(function(cat) {
        return (
          <div key={cat.id}>
            <h2>{cat.name}</h2>
            <img src={cat.image} alt={cat.name} />
            <h3>Edad: {cat.age}</h3>
          </div>
        );
      })}
    </div>
  );
};



