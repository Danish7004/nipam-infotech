import React, { useEffect , useState } from 'react'
import MoviesCard from '../../components/movies/MoviesCard'
import { searchData } from './querySlice';
import { useDispatch, useSelector } from "react-redux";
import {useParams } from 'react-router-dom'

function SearchData() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const { search } = useParams();
    const {loading, data } = useSelector((state) => state.search);
    useEffect(()=>{
        dispatch(searchData({page:page , search: search})) 
    },[page , dispatch,search])

   
  return (
      <div style={{color:'#fff'}}>

      { loading ? 'loading' : <MoviesCard setPage={setPage} data={data}/>}
      </div>
  )
}

export default SearchData