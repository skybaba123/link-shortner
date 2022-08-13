import React, { useState } from "react";
import LinkInput from "./LinkInput";
import LinkItems from "./LinkItems";
import classes from "./Main.module.css";

const Main = ({
  isLoading,
  linkShortner,
  shortUrl,
  originalUrl,
  succes,
  setSucces,
}) => {
  const [items, setItems] = useState([]);
  const add = (newitem) => {
    setItems([newitem, ...items]);
  };

  const list = items.map((item, id) => (
    <LinkItems
      shortUrl={item.shortUrl}
      originalUrl={item.originalUrl}
      key={id}
    />
  ));

  return (
    <main>
      <LinkInput
        isLoading={isLoading}
        setSucces={setSucces}
        succes={succes}
        shortUrl={shortUrl}
        originalUrl={originalUrl}
        linkShortner={linkShortner}
        onAdd={add}
      />
      {list}

      <section className={classes.section1}>
        <h1>Advance Statistics</h1>
        <p>
          Track how links are performing across the web with
          <br /> our advanced statistics dashboard
        </p>
      </section>
      <div className={classes.line}></div>
      <section className={classes.section2}>
        <div className={classes.div1}>
          <img />
          <h1>Brand Recognition</h1>
          <p></p>
        </div>

        <div className={classes.div2}>
          <img />
          <h1>Detailed Records</h1>
          <p></p>
        </div>

        <div className={classes.div3}>
          <img />
          <h1>Fully Customizable</h1>
          <p></p>
        </div>
      </section>

      <section className={classes.section3}>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </section>
    </main>
  );
};

export default Main;
