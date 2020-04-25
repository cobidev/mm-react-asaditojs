import React, { useState, useCallback } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import List from "./components/List";

const App = () => {
  const [gifUrl, setGifUrl] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getRandomGifUrl = async () => {
    const data = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G"
    );
    const response = await data.json();
    setGifUrl(response.data.fixed_height_downsampled_url));

    /*
    Fetch API using Promises

    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G"
    )
      .then(data => data.json())
      .then(response => {
        setGifUrl(response.data.fixed_height_downsampled_url);
      })
      .catch((error) => console.error(error);
    */
  };

  const addFavoriteGif = useCallback(() => {
    if (!gifUrl) return;

    // @todo - Print an alert message :)

    if (!favorites.includes(gifUrl)) {
      setFavorites([...favorites, gifUrl]);
    }
  }, [favorites, gifUrl]);

  return (
    <div className="main-wrapper">
      <Title>
        pick your <u>favorite</u> gif cat
      </Title>

      <Card
        gifUrl={gifUrl}
        getRandomGifUrl={getRandomGifUrl}
        addFavoriteGif={addFavoriteGif}
      />

      <List favorites={favorites} />
    </div>
  );
};

export default App;
