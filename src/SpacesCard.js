import React from "react"
import { useState } from "react"
export default function SpacesView({space}){

    const [likeButton,setLikeButton] = useState(true)

    function handleClick(){
        console.log("button is clicked")
        setLikeButton(likeButton => !likeButton)
    }

    return (
        <div>
            <h1>{space.title}</h1> <h4>Date:{space.date}</h4>
            <img src = {space.url} alt = "img" width="200px"/>
            <p>{space.explanation}</p>
            {likeButton ?<button onClick={handleClick}>Like</button> :
           <button onClick={handleClick}>Unlike</button>}
           
           
        </div>
    )
}