import React from "react";

function Botitem({ Bots,onAdd }) {
  const { id,avatar_url, name, catchphrase, health, damage, armor ,bot_class} = Bots;
  function handleClick(e){
        e.preventDefault()
        const mybot={
          id:id,
          name:name,
          health:health,
          damage:damage,
          armor:armor,
          bot_class:bot_class,
          catchphrase:catchphrase,
          avatar_url:avatar_url,
        };
        fetch("https://mybots1.onrender.com/mybots",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(mybot)
        })
        .then(resp=>resp.json())
        .then(data=>onAdd(data))


  }
  return (
    <div onClick={handleClick} className="w-52 border border-black flex flex-col bg-gray-200 p-4 m-4">
      <img src={avatar_url} alt="Bot Avatar" />
      <div className="flex ">
     <h2 className="text-lg font-bold">{name}</h2>
     <p className="ml-3 font-semibold">{bot_class}</p>
      </div>
      <p className="break-all">{catchphrase}</p>
      <div className="flex justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>

          <p>{health}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
          </svg>

          <p>{damage}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>

          <p>{armor}</p>
        </div>
      </div>
    </div>
  );
}

export default Botitem;
