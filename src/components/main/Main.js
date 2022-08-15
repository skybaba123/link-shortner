import React, { useEffect, useState } from "react";
import LinkInput from "./LinkInput";
import LinkItems from "./LinkItems";
import classes from "./Main.module.css";
import brand from "./images/icon-brand-recognition.svg";
import detailed from "./images/icon-detailed-records.svg";
import fully from "./images/icon-fully-customizable.svg";

const Main = ({
  isLoading,
  linkShortner,
  shortUrl,
  originalUrl,
  succes,
  setSucces,
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length > 0)
      localStorage.setItem("LINK_ITEM", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const data = localStorage.getItem("LINK_ITEM")
      ? JSON.parse(localStorage.getItem("LINK_ITEM"))
      : "";
    if (data.length > 0) setItems(data);
  }, []);

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
          <div className={classes.imageDiv}>
            <img src={brand} alt="" />
          </div>

          <h1>Brand Recognition</h1>
          <p>
            Boost your recognition with each click. Generic links don't mean a
            thing. Branded links helps instil confident in your content{" "}
          </p>
        </div>

        <div className={classes.div2}>
          <div className={classes.imageDiv}>
            <img src={detailed} alt="" />
          </div>

          <h1>Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. knowing when and
            where people engage with your content helps inform better decisions
          </p>
        </div>

        <div className={classes.div3}>
          <div className={classes.imageDiv}>
            <img src={fully} alt="" />
          </div>

          <h1>Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customization links. supercharging audience engagement
          </p>
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
