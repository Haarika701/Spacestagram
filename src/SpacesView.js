import React from "react"
import SpacesCard from "./SpacesCard"
export default function SpacesView({allSpaces}){

    const displaySpaces = allSpaces.map((space )=> {return <SpacesCard key = {space.date} space = {space}/>})
    return (
        <div className="spaces-view">
            {displaySpaces}
        </div>
    )
}