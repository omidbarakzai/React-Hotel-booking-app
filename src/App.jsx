
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/header";
import LocationList from "./components/locationLIst";
import AppLayOut from "./components/applayout/AppLayOut";
import Hotels from "./components/hotels/Hotels";
import HotelProvider from "../Context/HotelsProvider";
import SingleHotels from "./components/singleHotels";
import BookMark from "./components/bookmark";

function App() {
  return <>
  <HotelProvider >

    <Nav />
    <Routes>
      <Route path="/" element={<LocationList />} />
      <Route path="/hotels" element={<AppLayOut />}>
        <Route index element={<Hotels />} />
        <Route path=":id" element={<SingleHotels/>}/>
      </Route>
      <Route path="/bookMark"element={<BookMark/>}>
      <Route index element={<div>list</div>} />
        <Route path="add" element={<div>add new bookmaaark</div>}/>
      </Route>
    </Routes>
    
    </HotelProvider>


  </>
}

export default App;

