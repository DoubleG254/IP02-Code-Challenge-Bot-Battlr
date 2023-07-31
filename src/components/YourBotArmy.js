import React from "react";
import YourBot from "./YourBot";

function YourBotArmy({myBots, removeBot,deleteBot}){

    return(
        <div className="bg-yellow-400  ">
            <h1 className="text-centre text-2xl font-bold">My Robots</h1>
            <div className="flex flex-wrap p-4 ">
            {myBots.map((myBot)=><YourBot  key={myBot.id}
          avatar_url={myBot.avatar_url}
          name={myBot.name}
          catchphrase={myBot.catchphrase}
          health={myBot.health}
          damage={myBot.damage}
          armor={myBot.armor}
          bot_class={myBot.bot_class}
          id={myBot.id}
          removeBot={removeBot}
          deleteBot={deleteBot}/>)}
        </div>
        </div>
    )
}

export default YourBotArmy