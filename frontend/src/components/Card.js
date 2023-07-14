import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__vector ${
    isLiked && "element__vector_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      <img
        onClick={handleClick}
        className="element__image"
        src={card.link}
        alt={card.name}
      />
      <h2 className="element__title">{card.name}</h2>
      {isOwn && (
        <button
          onClick={handleDeleteClick}
          className="element__delete"
        ></button>
      )}
      <button
        onClick={handleLikeClick}
        className={cardLikeButtonClassName}
      ></button>
      <h3 className="element__digital">{card.likes.length}</h3>
    </article>
  );
}

export default Card;
