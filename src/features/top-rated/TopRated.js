import React, { useEffect , useState } from 'react'
import MoviesCard from '../../components/movies/MoviesCard'
import { fetchTopRatedMovies } from './slice/topRatedSlice';
import { useDispatch, useSelector } from "react-redux";

function TopRated() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const {loading, data } = useSelector((state) => state.topRated);
    useEffect(()=>{
        dispatch(fetchTopRatedMovies({page:page })) 
    },[page , dispatch ])
  return (
      <div style={{color:'#fff'}}>

      { loading ? 'loading' : <MoviesCard setPage={setPage} data={data}/>}
      </div>
  )
}

export default TopRated