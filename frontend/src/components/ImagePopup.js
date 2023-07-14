import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_open popup_open_img ${
        card ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container-open">
        <button
          onClick={onClose}
          className="popup__close"
          aria-label="Close"
          type="button"
          name="close"
          id="closeimg"
        ></button>
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <p className="popup__caption">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;