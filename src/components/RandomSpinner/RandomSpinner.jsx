import React, { useEffect, useState } from "react";
import "./RandomSpinner.scss";

const RandomSpinner = ({ data, maxPlayers }) => {
  const images = data.map(el => el.image);
  const [flagLeft, setFlagLeft] = useState(images[0]);
  const [flagRight, setFlagRight] = useState(images[1]);
  const [flagCenter, setFlagCenter] = useState(images[2]);

  useEffect(() => {
    const min = 0;
    const max = images.length - 1;

    let interval = setInterval(() => {
      const randomLeft = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomRight = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomCenter = Math.floor(Math.random() * (max - min + 1)) + min;
      setFlagLeft(images[randomLeft]);
      setFlagRight(images[randomRight]);
      setFlagCenter(images[randomCenter]);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="random-spinner">
      <img className="random-spinner__image" src={flagLeft} alt="" />
      <img className="random-spinner__image" src={flagRight} alt="" />
      {maxPlayers > 2 && <img className="random-spinner__image" src={flagLeft} alt="" />}
    </div>
  );
};

export default RandomSpinner;
