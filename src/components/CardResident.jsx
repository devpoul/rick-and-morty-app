import axios from "axios";
import React, { useEffect, useState } from "react";
import './styles/cardResident.css'

const CardResident = ({ url }) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="card">
      <header className="cardHeader">
        <img className="cardImage" src={resident?.image} alt="" />
        <div className="cardContainerStatus">
          <div className={`cardCircleStatus ${resident?.status}`}></div>
          <span className="cardStatus">{resident?.status}</span>
        </div>
      </header>
      <section className="cardBody">
        <h3 className="cardName">{resident?.name}</h3>
        <ul className="cardList">
          <li className="cardItem">
            <span className="cardSpan">Specie: </span>
            {resident?.species}
          </li>
          <li className="cardItem">
            <span className="cardSpan">Origin: </span>
            {resident?.origin.name}
          </li>
          <li className="cardItem">
            <span className="cardSpan">Episode where appear: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default CardResident;
