import { Browser } from "leaflet";
import { useState } from "react";


export default function useGeoLocation(){
    const[isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [position,setPosition]=useState({})


    function getPosition(){
        if(!navigator.geolocation)return setError("Your Browser dose not support geoLocation")
        setIsLoading(true)
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            setPosition({
              lat:position.coords.latitude,
              lng:position.coords.longitude,
            })
        setIsLoading(false)

          },
          (error)=>{
            setError(error.message)
        setIsLoading(false)

          }
        );
       
    }
     return{position,error,isLoading,getPosition,position  }

}