import { useEffect, useState } from "react"
import { useHotels } from "../../../Context/HotelsProvider";
import { Link } from "react-router-dom";



const LocationList = () => {
  const {data}=useHotels()

    return(<>




                <div className="nearbyLocation">
      <h2 className="font-bold text-3xl">Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          return (
           <Link  key={item.id}
           to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
           
           <div className="locationItem" key={item.id}>
              <img src={item.picture_url.url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="locaiton">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  €&nbsp;{item.price}&nbsp;
                  <span>night</span>
                </p>
              </div>
            </div>
           </Link>
          );
        })}
      </div>
    </div>


    </>)
    
}


export default LocationList


