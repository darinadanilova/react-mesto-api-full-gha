import React from "react";
import imgSuccess from "../images/success.png";
import imgUnsuccess from "../images/unsuccess.png";

function InfoTooltip({ isOpen, onClose, isSuccessInfoTooltipStatus }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className={"popup__container popup__container-notification"}>
        <button
          onClick={onClose}
          className="popup__close"
          aria-label="Close"
          type="button"
          name="close"
          id="closenotification"
        ></button>
        <img
          className="popup__notification-img"
          src={isSuccessInfoTooltipStatus ? imgSuccess : imgUnsuccess}
          alt=""
        />
        <h2 className="popup__notification-title">
          {isSuccessInfoTooltipStatus
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз"}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
