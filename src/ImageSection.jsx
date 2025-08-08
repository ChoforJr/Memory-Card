import React, { useState, useEffect } from "react";

export default function ImageSection({ shuffledItems, onClick }) {
  return (
    <main>
      {shuffledItems.map((shuffledItem) => (
        <Card name={shuffledItem} key={shuffledItem} onClick={onClick} />
      ))}
    </main>
  );
}

function Card({ name, onClick }) {
  const [imageLink, setImageLink] = useState(null);

  useEffect(() => {
    const cachedUrl = sessionStorage.getItem(`image_${name}`);

    if (cachedUrl) {
      setImageLink(cachedUrl);
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(
          // `https://api.giphy.com/v1/gifs/translate?api_key=8NK4HJpb5hLPh6nzYOE4N7OPbBJ3tGOw&s=anime ${name}`,
          `https://api.giphy.com/v1/gifs/search?api_key=j65jY41AnFhYGHn8WkQwXIB1ExR0omSm&q=anime ${name}&limit=1`,
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const newUrl = result.data[0].images.original_still.url;
        sessionStorage.setItem(`image_${name}`, newUrl);
        setImageLink(newUrl);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchImage();
  }, [name]);

  return (
    <article onClick={onClick} id={name}>
      {imageLink ? (
        <img src={imageLink} alt="Character Image" />
      ) : (
        <p>Loading...</p>
      )}
      <h3>{name}</h3>
    </article>
  );
}
