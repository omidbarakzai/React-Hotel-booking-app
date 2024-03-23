import { useContext } from "react"
import { createContext } from "react"
import { useSearchParams } from "react-router-dom"
import useFetch from "../src/hook/useFetch"

  const HotelContext = createContext()

   function HotelsProvider  ({children})  {
    const [searchparams, setsearchparams] = useSearchParams()
    const destination = searchparams.get('destination')
    const room = JSON.parse(searchparams.get("options"))?.room
    const { data } = useFetch(" http://localhost:5000/hotels", `q=${destination || ""}&accommodates_gte=${room || 1}   `
    
    )
    return <HotelContext.Provider value={{data}} >{children}</HotelContext.Provider>
}


 export default HotelsProvider;


export function useHotels(){
    return useContext(HotelContext)
}