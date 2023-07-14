import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onSignUpSubmit }) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  function handleChangeEmail(e) {
    setSignUpEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setSignUpPassword(e.target.value);
  }

  function handleRegister(evt) {
    evt.preventDefault();
    onSignUpSubmit(signUpEmail, signUpPassword);
  }

  return (
    <div className="auths">
      <h2 className="auths__title">Регистрация</h2>
      <form className="auths__form" onSubmit={handleRegister} noValidate>
        <input
          required
          onChange={handleChangeEmail}
          value={signUpEmail || ""}
          type="email"
          className="auths__input auths__input_email"
          id="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        <span id="email-error" className="auths__error"></span>

        <input
          required
          onChange={handleChangePassword}
          value={signUpPassword || ""}
          type="password"
          className="auths__input auths__input_password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
        />
        <span id="password-error" className="auths__error"></span>

        <button
          className="auths__button"
          aria-label="auths-button"
          type="submit"
          name="auths-button"
          id="auths-button"
        >
          Зарегистрироваться
        </button>
        <p className="auths__subtitle">
          Уже зарегистрированы?
          <Link to="/sign-in" className="auths__login">
            &nbsp;Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
