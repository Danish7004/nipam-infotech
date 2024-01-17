import React, { useEffect, useState } from "react";
import MoviesCard from "../../components/movies/MoviesCard";
import { fetchAllMovies } from "./slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

function Popular() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {loading, data } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies({ page: page }));
  }, [page, dispatch]);

  return <div style={{color:'#fff'}}>{loading ? 'Loading': <MoviesCard data={data} setPage={setPage} />}</div>;
}

export default Popular;
