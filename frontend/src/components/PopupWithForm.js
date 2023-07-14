import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  button,
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup_${name}`}
    >
      <div className={`popup__container popup__container-${name}`}>
        <button
          onClick={onClose}
          className="popup__close"
          aria-label="Close"
          type="button"
          name="close"
          id="close"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__inform"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className="popup__button-rectangle"
            aria-label="Save"
            type="submit"
            name="save"
            id="save"
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;