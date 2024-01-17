import React from 'react';
import './card.css';
import config from '../../config';
import {useNavigate} from 'react-router-dom'

function MoviesCard({data , setPage}) {
  const navigate = useNavigate()
  const movieDetails = (id) => {
    navigate(`/movie/details/${id}`)
  }

  return (
      <>
       {data?.length !==0 ?
    <div className="card-container">
       { data?.map((el , i)=> (
            <div  key={i} className="card">
            <img onClick={()=>movieDetails(el.id)} className='image' src={`${config.IMAGE_URL}/${el.poster_path}`} alt='itemmm'/>
            <h4>{el.title}</h4>
            <p>Rating: {el.vote_average}</p>
           
        </div>
        ))
       }
</div>  : <p style={{color:'#fff', display:'flex' , justifyContent:'center'}}>No Records found</p>}
<div className="pagination">
        <button onClick={()=> setPage((prev)=> prev > 1 ? prev - 1 : 1)} id="prevBtn">Previous</button>
        <button onClick={()=> setPage((prev)=> prev + 1)} id="nextBtn">Next</button>
    </div>
</>
  )
}

export default MoviesCard