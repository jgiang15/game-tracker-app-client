const config = require('../config')
const store = require('../store.js')

const createGame = function (data) {
  // console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexGames = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const updateGame = function (data, id) {
  // console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteGame = function (id) {
  // console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  indexGames,
  updateGame,
  deleteGame
}
