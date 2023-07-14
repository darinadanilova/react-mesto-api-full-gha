import React from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <img
            className="profile__avatar-image"
            src={currentUser.avatar}
            alt="Фото мужчины"
          />
          <button
            onClick={onEditAvatar}
            className="profile__button-avatar"
            aria-label="Edit"
            type="button"
            name="avatar"
            id="avatars"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            className="profile__button-rectangle"
            aria-label="Edit"
            type="button"
            name="edit"
            id="edit"
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__button-vector"
          aria-label="Add"
          type="button"
          name="add"
          id="add"
        ></button>
      </section>
      <section className="groups">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
