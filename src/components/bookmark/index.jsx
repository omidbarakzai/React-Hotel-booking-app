import { Outlet } from "react-router-dom"
import Map from '../map'
import { useHotels } from "../../../Context/HotelsProvider"
   





   const BookMark =()=>{

    return(<>
      <div className="appLayout">
      <div className="sidebar">
        <Outlet />
       
      </div>

      <Map markerLacation={[]}  />
    </div>



     
    </>)
   }

   export default BookMark