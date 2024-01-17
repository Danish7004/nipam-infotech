import Navbar from "./components/Navbar";
import Popular from "./features/popular/Popular";
import TopRated from "./features/top-rated/TopRated";
import Upcoming from "./features/upcoming/Upcoming";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "./features/details/Details";
import SearchData from "./features/search/SearchData";
function App() {

  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Popular/>}/>
      <Route path="/top-rated" element={<TopRated/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/movie/details/:id" element={<Details/>}/>
      <Route path="/movie/search/:search" element={<SearchData/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
