import React, { useState } from "react";
import classes from "./LinkItems.module.css";

const LinkItems = ({ originalUrl, shortUrl }) => {
  const [timer, setTimer] = useState(true);

  const clipboard = () => {
    setTimer(false);
    navigator.clipboard.writeText(shortUrl);
    setTimeout(() => {
      setTimer(true);
    }, 2000);
  };
  return (
    <div className={classes.item}>
      <p>{originalUrl}</p>
      <div>
        <p>{shortUrl}</p>
        <button
          style={{ backgroundColor: timer ? "" : "hsl(255, 11%, 22%)" }}
          onClick={clipboard}
        >
          {timer ? "Copy" : "Copied!"}
        </button>
      </div>
    </div>
  );
};

export default LinkItems;
