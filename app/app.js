// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const vidGamesEvents = require('./vidGames/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#log-games').on('submit', vidGamesEvents.onCreateGame)
  $('#index-games').on('click', vidGamesEvents.onIndexGames)
  $('#update-game').on('submit', vidGamesEvents.onUpdateGame)
  // $('#show-books').on('click', '.delete-book-list', vidGamesEvents.onDeleteListGame)

  // $('#show-books').on('click', '.update-book-list', vidGamesEvents.onUpdateListGame)
})
