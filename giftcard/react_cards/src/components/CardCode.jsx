import React from "react";

function CardCode({card}) {
    // var date = new Date();
  
  return (
    <div className={`${card.OS=="MacOS" ? "mac" : "desk"}`}>
      <div className="firstsec">
        <h2>{card.date}</h2>
        <button>Case Study</button>
        <h1>{card.name}</h1>
        <p>{card.OS} -MOBILE</p>
      </div>


      <div className="secondsec">
        <img src={card.imageUrl}  />
        <img src={card.arrow} />
      </div>
    </div>
  );
}

export default CardCode;
