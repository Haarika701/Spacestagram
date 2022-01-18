import React from "react"
import { useState,useEffect } from "react"
import SpacesView from "./SpacesView"
export default function SpacesContainer(){

    const NASA_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&start_date=2021-11-01&end_date=2021-11-30`
    
    const[allSpaces,setAllSpaces] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        fetch(NASA_BASE_URL)
        .then(resp => {
            if(resp.ok){
                resp.json().then((data) => setAllSpaces(data))
                setIsLoading(false)
            }
        })
    },[])
    
  
     if (isLoading) return <div className="spaces-load">Please wait while we load the images...</div>
    return (
        <div className="spaces-container">
           
            <SpacesView allSpaces = {allSpaces}/>
        </div>
    )

}