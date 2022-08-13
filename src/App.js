import React, { useState } from "react";
import "./index.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [succes, setSucces] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const linkShortner = async (url) => {
    setIsLoading(true);
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const responseData = await response.json();
    if (responseData) {
      setSucces(true);
    }
    // const data = responseData.result;
    const shortLink = responseData.result.short_link;
    const originalLink = responseData.result.original_link;
    setIsLoading(false);
    setShortUrl(shortLink);
    setOriginalUrl(originalLink);

    // console.log(data);
  };

  return (
    <div>
      <Nav />
      <Header />
      <Main
        isLoading={isLoading}
        shortUrl={shortUrl}
        originalUrl={originalUrl}
        linkShortner={linkShortner}
        succes={succes}
        setSucces={setSucces}
      />
      <Footer />
    </div>
  );
};

export default App;
