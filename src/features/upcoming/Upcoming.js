import React, { useEffect , useState } from 'react'
import MoviesCard from '../../components/movies/MoviesCard'
import { fetchUpcomingMovies } from './slice/upcomingSlice';
import { useDispatch, useSelector } from "react-redux";

function Upcoming() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const {loading, data } = useSelector((state) => state.upcomingMovies);
    useEffect(()=>{
        dispatch(fetchUpcomingMovies({page:page})) 
    },[page , dispatch])
  return (
      <div style={{color:'#fff'}}>

      { loading ? 'loading' : <MoviesCard setPage={setPage} data={data}/>}
      </div>
  )
}

export default Upcoming