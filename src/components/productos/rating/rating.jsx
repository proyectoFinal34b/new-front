import React, { useEffect, useState } from 'react';
import '../rating/styleRating.css'
import axios from 'axios';


export default function HoverRating({id , value}) {


    const [rating, setRating] = useState(0);

    const handleMouseEnter = (event) => {
      const { value } = event.target;
      setRating(value);
    };
  
    const handleMouseLeave = () => {
      setRating(0);
    };
  
    const handleInputChange = async (event) => {
      const { value } = event.target;
      setRating(value);
      await axios.post(`/product/${id}/ratings`,{rated: value, review:""})
      .then(res=>alert(res)).catch(res=>alert("aiuda"))
    };

    useEffect(()=>{
      async function getRating(){
        try {
          const rating = await axios.get(`/product/${id}`).then(res=>res.data.ratings.rated)
          setRating(rating)
        } catch (error) {
            console.log(error)
        }
      }
      getRating()
    },[])
  
    return (
      <div className="rating">
        <label htmlFor="star-1">
          <input
            type="radio"
            id="star-1"
            name="star-radio"
            value="5"
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <path
              pathLength="360"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </label>
        <label htmlFor="star-2">
          <input
            type="radio"
            id="star-2"
            name="star-radio"
            value="4"
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <path
              pathLength="360"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </label>
        <label htmlFor="star-3">
          <input
            type="radio"
            id="star-3"
            name="star-radio"
            value="3"
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <path
              pathLength="360"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </label>
        <label htmlFor="star-4">
          <input
            type="radio"
            id="star-4"
            name="star-radio"
            value="2"
            onChange={handleInputChange}
          />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <path
              pathLength="360"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </label>
        <label htmlFor="star-5">
          <input
            type="radio"
            id="star-5"
            name="star-radio"
            value="1"
            onChange={handleInputChange}
          />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <path
              pathLength="360"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </label>
    </div>
  );
}

