import { Link } from "react-router-dom";
import { useHotels } from "../../../Context/HotelsProvider";





const Hotels = () => {
const {data}=useHotels()





    return (<>
    <div className="searchList">
      <h2>Search Results ({data.length})</h2>
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className="searchItem"
            >
              <img src={item.picture_url.url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                €&nbsp;{item.price}&nbsp;
                <span>night</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
              
    </>)
    
}

export default Hotels


{/* <div className="  ">

<div className="">

          </div> */}