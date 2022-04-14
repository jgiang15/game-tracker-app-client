const gamesApi = require('./api.js')
const gamesUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreateGame = (event) => {
  event.preventDefault()
  console.log('in events.js')

  const form = event.target
  const data = getFormFields(form)

  gamesApi
    .createGame(data)
    .then((response) => gamesUi.onCreateGameSuccess(response))
    .catch(() => gamesUi.onCreateGameFailure())
}

const onIndexGames = () => {
  console.log('in event listener!!!!!')
  // get the books from the API
  // check the Network tab!
  gamesApi
    .indexGames()
    // JavaScript Promises
    // if the request/response is successful, run this callback
    .then((response) => gamesUi.onIndexGamesSuccess(response))
    // if the request/response has an error, run this callback
    .catch(() => gamesUi.onIndexGamesFailure())
}

module.exports = {
  onCreateGame,
  onIndexGames
}
