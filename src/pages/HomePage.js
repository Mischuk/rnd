import React, { useState } from "react";
import RandomSpinner from "../components/RandomSpinner/RandomSpinner";
import Spinner from "../components/Spinner/Spinner";

function HomePage(props) {
  const { isLoading, user: data } = props.data;
  const [randomed, setRandomed] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState();
  const [secondPlayer, setSecondPlayer] = useState();
  const [randomAnimation, setRandomAnimation] = useState(false);
  const [modalPlayer, setModalPlayer] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const intervalTime = 400;

  const randomInit = (min, max, exclude = null) => {
    if (!exclude && exclude !== 0) {
      let randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomed;
    } else {
      let randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      while (exclude === randomed) {
        randomed = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return randomed;
    }
  };

  const getRandomPlayers = (cleared = true) => {
    const min = 0;
    const max = data.nations.length - 1;

    if (!cleared) {
      setFirstPlayer();
      setSecondPlayer();
      setRandomed(false);
      setRandomAnimation(false);
    }

    let randomNum1 = randomInit(min, max);
    let randomNum2 = randomInit(min, max, randomNum1);

    setFirstPlayer(data.nations[randomNum1]);
    setSecondPlayer(data.nations[randomNum2]);

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
          <div className="randomed__column">{!randomAnimation && renderNation(firstPlayer, null)}</div>
          <div className="randomed__column randomed__column--small">
            {!randomAnimation && (
              <button className="homepage__random-button" onClick={() => getRandomPlayers(false)}>
                Random
              </button>
            )}
            {randomAnimation && <RandomSpinner data={data.nations} />}
          </div>
          <div className="randomed__column">{!randomAnimation && renderNation(secondPlayer, null)}</div>
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
