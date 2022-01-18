import React from "react"
import { useState } from "react"
import { Card,CardContent,Typography } from "@mui/material"
export default function SpacesView({space}){

    const [likeButton,setLikeButton] = useState(true)

    function handleClick(){
        console.log("button is clicked")
        setLikeButton(likeButton => !likeButton)
    }

    return (
        <div className="spaces-card">
            <Card sx={{ maxWidth: 400 }}>
           
            <img src = {space.url} alt = "img" width="400px" height="400px"/>
            <CardContent>
            <Typography variant="h3">
            {space.title}
            </Typography>
            <Typography variant = "h5">
            {space.date}
            </Typography>
            <Typography variant="body2">
            {space.explanation}
            </Typography>
            </CardContent>
            {likeButton ?<button onClick={handleClick}>Like</button> :
           <button onClick={handleClick}>Unlike</button>}
            </Card>
        </div>
    )
}