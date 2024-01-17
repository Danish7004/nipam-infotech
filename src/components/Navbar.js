import React, {  useState } from "react";
import "./navbar.css";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [query , setQuery] = useState('')

  return (
    <div style={{ background: "#454545" }}>
      <nav className="navbar">
        <div className="brand">
          <h1>MoviesDb</h1>
        </div>

        <div className="search-bar">
          <ul onClick={()=> setQuery('')} className="user-names">
           <Link to='/'> <li>Popular</li></Link>
           <Link to='/top-rated'> <li>Top Rated</li></Link>
           <Link to='/upcoming'> <li>Upcoming</li></Link>
          </ul>
          <input type="text" value={query} placeholder="Search..." onChange={(e)=> setQuery(e.target.value)}/>
          <button
            onClick={() =>
             {if(query.length === 0){
              navigate('/')
             }else navigate(`/movie/search/${query}`)}
            }
            type="button"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
