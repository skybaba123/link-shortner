import React, { useState } from "react";
import classes from "./LinkInput.module.css";

const LinkInput = ({
  isLoading,
  onAdd,
  linkShortner,
  shortUrl,
  originalUrl,
  succes,
  setSucces,
}) => {
  const [input, setInput] = useState("");

  const onAddToList = () => {
    onAdd({ shortUrl, originalUrl });
    setInput("");
    setSucces(false);
  };

  const onSubmitHandler = () => {
    if (input.includes(".") && input.trim().length > 4) {
      linkShortner(input);
    }
  };

  return (
    <div className={classes.container}>
      <input
        placeholder="Shorten a link here..."
        type="text"
        value={succes ? shortUrl : input}
        onChange={(e) => setInput(e.target.value)}
      />
      {succes && <p style={{ color: "green", position: "absolute" }}>Succes</p>}
      {!succes ? (
        <button onClick={onSubmitHandler}>
          {isLoading ? "Loading..." : "Shorten it!"}
        </button>
      ) : (
        <button onClick={onAddToList}>Save Link</button>
      )}
    </div>
  );
};

export default LinkInput;
