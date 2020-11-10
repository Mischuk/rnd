import React, { useEffect, useState } from "react";
import RandomSpinner from "../components/RandomSpinner/RandomSpinner";
import Spinner from "../components/Spinner/Spinner";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomePage(props) {
  const { isLoading, user: data } = props.data;
  const [randomed, setRandomed] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState();
  const [secondPlayer, setSecondPlayer] = useState();
  const [thirdPlayer, setThirdPlayer] = useState();
  const [randomAnimation, setRandomAnimation] = useState(false);
  const [modalPlayer, setModalPlayer] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const intervalTime = 400;
  const placerTypes = ["Fractal", "Pangaea", "Continents", "Earth", "Donut", "Oval", "Terra"];
  const [maxPlayers, setMaxPlayers] = useState(2);
  let query = useQuery();

  const randomInit = (min, max, exclude = null, exclude2 = null) => {
    if (!exclude && !exclude2 && exclude2 !== 0 && exclude !== 0) {
      let randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomed;
    } else {
      let randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      while (exclude === randomed && exclude2 === randomed) {
        randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return randomed;
    }
  };

  useEffect(() => {
    const max = query.get("max") || 2;

    setMaxPlayers(max);
  });

  const getRandomPlayers = (cleared = true) => {
    const min = 0;
    const max = data.nations.length - 1;

    if (!cleared) {
      setFirstPlayer();
      setSecondPlayer();
      setThirdPlayer();
      setRandomed(false);
      setRandomAnimation(false);
    }

    let randomNum1 = randomInit(min, max);
    console.log(`randomNum1: `, randomNum1);
    let randomNum2 = randomInit(min, max, randomNum1);
    console.log(`randomNum2: `, randomNum2);
    let randomNum3 = randomInit(min, max, randomNum1, randomNum2);
    console.log(`randomNum3: `, randomNum3);

    setFirstPlayer(data.nations[randomNum1]);
    setSecondPlayer(data.nations[randomNum2]);
    setThirdPlayer(data.nations[randomNum3]);

    setRandomed(true);
    setRandomAnimation(true);

    setTimeout(() => {
      setRandomAnimation(false);
    }, intervalTime);
  };

  const openModal = id => {
    const item = data.nations.find(nation => id === nation.id);
    setModalPlayer(item);
    setModalOpen(true);
  };

  const renderPlace = () => {
    let randomIndex = randomInit(0, placerTypes.length - 1);

    return (
      <div className="nation nation--clear">
        <div className="nation__title">Map: {placerTypes[randomIndex]}</div>
      </div>
    );
  };

  const renderNation = (player, size = null) => {
    const { name, image, unique, info, id } = player;
    return (
      <div className={`nation ${size ? `nation--${size}` : ""}`}>
        <div className="nation__title" onClick={() => openModal(id)}>
          <img className="nation__title-image" src={image} alt="" />
          {name}
        </div>

        <div className="nation__unique">
          {unique.map((el, index) => (
            <div key={index} className="nation__unique-item">
              {el}
            </div>
          ))}
        </div>

        {player.buildings && (
          <div className="nation__unique nation__unique--nested">
            {player.buildings.map((el, index) => (
              <div key={index} className="nation__unique-item">
                <div className="nation__title nation__title--small">
                  <img className="nation__title-image" src={el.image} alt="" />
                  {el.title}
                  <div className="nation__sub-title">{el.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {player.units && (
          <div className="nation__unique nation__unique--nested">
            {player.units.map((el, index) => (
              <div key={index} className="nation__unique-item">
                <div className="nation__title nation__title--small">
                  <img className="nation__title-image" src={el.image} alt="" />
                  {el.title}
                  <div className="nation__sub-title">{el.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="nation__unique">
          <div className="nation__unique-item">
            {info.type.map((el, index) => (
              <span key={index}>{el} </span>
            ))}
          </div>
          <div className="nation__unique-item">{info.boost}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="homepage">
      {isLoading && <Spinner />}
      {!isLoading && !randomed && (
        <div className="homepage__random">
          <button className="homepage__random-button" onClick={getRandomPlayers}>
            Random
          </button>
        </div>
      )}
      {!isLoading && randomed && (
        <div className="randomed">
          <div className="randomed__column randomed__column--top">{!randomAnimation && renderPlace()}</div>

          <div className="randomed__column">{!randomAnimation && renderNation(firstPlayer, null)}</div>
          <div className="randomed__column">{!randomAnimation && renderNation(secondPlayer, null)}</div>
          {maxPlayers >= 3 && (
            <div className="randomed__column">{!randomAnimation && renderNation(thirdPlayer, null)}</div>
          )}
          <div className="randomed__column randomed__column--small">
            {!randomAnimation && (
              <button className="homepage__random-button" onClick={() => getRandomPlayers(false)}>
                Random
              </button>
            )}
            {randomAnimation && <RandomSpinner maxPlayers={maxPlayers} data={data.nations} />}
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="modal">
          <div className="modal__close" onClick={() => setModalOpen(false)}>
            &#10006;
          </div>
          {renderNation(modalPlayer, "small")}
        </div>
      )}
    </div>
  );
}

export default HomePage;
