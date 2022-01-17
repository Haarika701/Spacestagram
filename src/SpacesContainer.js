import React from "react"
import { useState } from "react"
import SpacesView from "./SpacesView"
export default function SpacesContainer(){

    const NASA_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=0JqA3znQkwnAI7ImklsVVD9i0lfmbebahzsyu84z&start_date=2021-09-01&end_date=2021-09-30`
     


    const[allSpaces,setAllSpaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    fetch(NASA_BASE_URL)
    .then(resp => {
        if(resp.ok){
            resp.json().then((data) => setAllSpaces(data))
            setIsLoading(false)
        }
    },[])
  
    // setIsLoading(false)

     if (isLoading) return <div>Please wait while we load the images...</div>
    return (
        <div>
            <h1>Spacestagram</h1>
            <SpacesView allSpaces = {allSpaces}/>
        </div>
    )

}