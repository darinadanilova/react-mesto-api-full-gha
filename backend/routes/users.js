/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUserById, getUser, patchUser, patchAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
}), getUserById);

router.get('/me', getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), patchUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/https?:\/\/(?:www\.)?\w+\.\w+(?:\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?(?:#\w*)?/),
  }),
}), patchAvatar);

module.exports = router;
