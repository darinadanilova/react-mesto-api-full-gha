import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace(name, link);
  }

  return (
    <PopupWithForm
      title={"Новое место"}
      button={"Создать"}
      name={"informations"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChangeName}
        required
        type="text"
        minLength="2"
        maxLength="30"
        className="popup__form popup__form_input_place"
        id="place"
        name="place"
        placeholder="Название"
        value={name}
      />
      <span id="place-error" className="popup__error"></span>
      <input
        onChange={handleChangeLink}
        required
        type="url"
        className="popup__form popup__form_input_link"
        id="link"
        name="link"
        placeholder="Сcылка на картинку"
        value={link}
      />
      <span id="link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;