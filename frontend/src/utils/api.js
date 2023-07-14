class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  //Ответ с сервера:

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Получение инфы с сервера:

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  //Отправка инфы на сервер:

  patchInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then((res) => this._checkResponse(res));
  }

  //Получение карточек:

  getCard() {
    return fetch(`${this._url}/cards `, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  //Добавление карточек:

  postCard(name, link) {
    console.log(name, link);
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._checkResponse(res));
  }

  //Удаление карточек:

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  //Поставить лайк:

  changeLike(cardId, isLiked) {
    if (!isLiked) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => this._checkResponse(res));
    } else {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => this._checkResponse(res));
    }
  }

  //Редактирование авы:

  patchAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then((res) => this._checkResponse(res));
  }
}

//Экземпляр класса API:

const api = new API({
  url: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    "content-type": "application/json",
    Authorization: "0aad50e9-c4b5-4f67-8001-5116e2404bbe",
  },
});

export default api;