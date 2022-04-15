const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGame = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  gamesApi
    .createGame(data)
    .then((response) => gamesUi.onCreateGameSuccess(response))
    .catch(() => gamesUi.onCreateGameFailure())
}

const onIndexGames = () => {
  // get the games from the API
  // check the Network tab!
  gamesApi
    .indexGames()
    // JavaScript Promises
    // if the request/response is successful, run this callback
    .then((response) => gamesUi.onIndexGamesSuccess(response))
    // if the request/response has an error, run this callback
    .catch(() => gamesUi.onIndexGamesFailure())
}

const onUpdateGame = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gamesApi
    .updateGame(data, data.game.id)
    .then(() => gamesUi.onUpdateGameSuccess())
    .catch(() => gamesUi.onUpdateGameFailure())
}

// const onDeleteListGame = function (event) {
//   // event.target will tell us more info about the thing that was clicked
//   const deleteButton = event.target
//   // we need to find id of book
//   const gameId = $(deleteButton).data('id')

//   console.log(gameId)

//   gamesApi.deleteBook({ gameId })

//   gamesApi
//     .deleteBook(gameId)
//     .then(() => gamesUi.onDeleteBookSuccess())
//     .catch(() => gamesUi.onDeleteBookFailure())
// }

module.exports = {
  onCreateGame,
  onIndexGames,
  onUpdateGame

//   onDeleteListGame
}
