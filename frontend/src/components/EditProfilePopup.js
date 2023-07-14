import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeProfession(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      button={"Сохранить"}
      name={"information"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChangeName}
        value={name ?? ""}
        required
        type="text"
        minLength="2"
        maxLength="40"
        className="popup__form popup__form_input_name"
        id="name"
        name="name"
        placeholder="Имя"
      />
      <span id="name-error" className="popup__error"></span>
      <input
        onChange={handleChangeProfession}
        value={description ?? ""}
        required
        type="text"
        minLength="2"
        maxLength="200"
        className="popup__form popup__form_input_profession"
        id="profession"
        name="profession"
        placeholder="Профессия"
      />
      <span id="profession-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
