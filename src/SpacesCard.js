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
            <Card sx={{ maxWidth: 380 }}>
           
            <img src = {space.url} alt = "img" width="380px" height="380px"/>
            <CardContent>
            <Typography variant="h4">
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