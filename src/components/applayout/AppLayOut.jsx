import { Outlet } from "react-router-dom"
import Map from '../map'
import { useHotels } from "../../../Context/HotelsProvider"
   





   const AppLayOut =()=>{
    const { data } = useHotels()

    return(<>
      <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLacation={data}  />
    </div>



     
    </>)
   }

   export default AppLayOut