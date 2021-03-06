"use strict";

const Constants = require("../../../../Constants");
const Events = Constants.Events;
const Endpoints = Constants.Endpoints;
const apiRequest = require("../../../../core/ApiRequest");

module.exports = function(guildId, userId, nick) {
  const endpoint = this._user.id === userId ?
    `${Endpoints.GUILD_MEMBERS(guildId)}/${Constants.ME}/nick` :
    `${Endpoints.GUILD_MEMBERS(guildId)}/${userId}`;

  return new Promise((rs, rj) => {
    apiRequest
    .patch(this, {
      url: endpoint,
      body: {nick: nick}
    })
    .send((err, res) => {
      return (!err && res.ok) ? rs() : rj(err);
    });
  });
};
