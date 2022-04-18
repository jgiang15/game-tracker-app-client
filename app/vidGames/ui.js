const onCreateGameSuccess = function (response) {
  const gameHtml = `
                      <div>
                        <h4>Title: ${response.game.title}</h4>
                        <p>Developer: ${response.game.developer}</p>
                        <p>Star Rating: ${response.game.rating}</p>
                        <p>Game Just Logged</p>
                      </div>
                    `
  $('#show-games').html(gameHtml)

  $('form').trigger('reset')

  $('#auth-display').text('')
}

const onCreateGameFailure = function () {
  $('#auth-display').text('Failure while trying to log game')
}

const onIndexGamesSuccess = function (response) {
  // string to represent the html of our games display
  // initialize as empty
  let gamesHtml = ''

  // use forEach to display every game
  response.games.forEach((game) => {
    // booksHtml += '<li>' + game.title + '</li>'
    // booksHtml = booksHtml + '<li>' + game.title + '</li>'

    gamesHtml += `
                      <div>
                        <h4>Title: ${game.title}</h4>
                        <p>Developer: ${game.developer}</p>
                        <p>Star Rating: ${game.rating}</p>
                        <p>ID: ${game._id}</p>
                        <form class="update-game-list" data-id=${game._id}>
                          <input name="game[title]" type="text" placeholder="Game Title">
                          <input name="game[developer]" type="text" placeholder="Game Developer">
                          <input name="game[rating]" type="text" placeholder="Game Rating">
                          <button type="submit">Update Game</button>
                        </form>
                        <button class="delete-game-list" data-id=${game._id}>Delete Game</button>
                      </div>
                    `
  })

  $('#show-games').html(gamesHtml)
}
const onIndexGamesFailure = function () {
  $('#auth-display').text('There was an error')
}

const onUpdateGameSuccess = function () {
  $('#show-games').html('Success. Game Updated!')
  $('form').trigger('reset')
}

const onUpdateGameFailure = function () {
  $('#auth-display').text('Failure while trying to update game')
}

const onDeleteGameSuccess = function () {
  $('#show-games').html('Success. Game deleted!')
  $('form').trigger('reset')
}

const onDeleteGameFailure = function () {
  $('#auth-display').text('Failure while trying to delete book')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onIndexGamesSuccess,
  onIndexGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onDeleteGameSuccess,
  onDeleteGameFailure
}
