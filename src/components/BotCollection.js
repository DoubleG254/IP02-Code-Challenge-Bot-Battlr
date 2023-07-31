import React from "react";
import Botitem from "./Botitem";

function BotCollection({robots,onAdd}){

    return (
        <div className="flex flex-wrap p-4">
            {robots.map((robot)=>(
                <Botitem onAdd={onAdd}  key={robot.id} Bots={robot}/>
            ))}
        </div>
    )
}


export default BotCollection