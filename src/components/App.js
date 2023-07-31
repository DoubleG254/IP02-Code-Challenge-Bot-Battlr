import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [robots, setRobots] = useState([]);
  const [myrobots, setMyRobots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://bots-fcbv.onrender.com/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setRobots(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, []);

  useEffect(() => {
    fetch("https://mybots1.onrender.com/mybots")
      .then((resp) => resp.json())
      .then((data) => {
        setMyRobots(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, []);

  function addBot(newBot) {
    const updateBot = [...myrobots, newBot];
    setMyRobots(updateBot);
  }

  function removeBot(id) {
    const updateBot = myrobots.filter((myrobot) => myrobot.id !== id);
    setMyRobots(updateBot);
  }

  function deleteBot(id) {
    const updateBot = robots.filter((robot) => robot.id !== id);
    setRobots(updateBot);
  }

  if (isLoading) {
    // If data is being fetched, display a loading message or spinner
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <YourBotArmy myBots={myrobots} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection robots={robots} onAdd={addBot} />
    </div>
  );
}

export default App;
