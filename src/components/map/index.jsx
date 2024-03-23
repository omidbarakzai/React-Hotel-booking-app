import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet"
import { useHotels } from "../../../Context/HotelsProvider"
import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import useGeoLocation from "../../hook/GeoLocation"


const Map = ({markerLacation}) => {
  const [mapcenter, setmapcenter] = useState([20, -3])
  const [searchparams, setsearchparams] = useSearchParams()

  const lat = searchparams.get("lat")
  const lng = searchparams.get("lng")
  useEffect(() => {
    if (lat && lng) setmapcenter([lat, lng]);
  }, [lat, lng]);
  const {position,
    error,
    isLoading:loading,
    getPosition}=useGeoLocation()


    useEffect(()=>{
      if(position?.lat && position?.lng ){
        setmapcenter([
          position.lat,  position.lng
        ])
      }
    },[position])
  return (<>
    <div className="mapContainer">
      <MapContainer className="map" center={mapcenter} zoom={13} scrollWheelZoom={true}>
        <button onClick={getPosition} className="getLocation">
          {
            loading?"loading....":" Use your Location"
          }
          
          </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <DetectClick/>
        <ChangeCenter position={mapcenter} />
        {
          markerLacation.map((item) => (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          ))

        }
      </MapContainer>
    </div>
  </>)
}

export default Map

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}


function DetectClick(){
  const navigate = useNavigate()
  useMapEvent({
    click:e=>navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
  return null
}