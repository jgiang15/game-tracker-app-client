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
  console.log('Game Logged')

  $('form').trigger('reset')

  $('#auth-display').text('')
}

const onCreateGameFailure = function () {
  $('#auth-display').text('Failure while trying to log game')
}

const onIndexGamesSuccess = function (response) {
  // string to represent the html of our games display
  // initialize as empty
  let booksHtml = ''

  // use forEach to display every book
  response.games.forEach((game) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    booksHtml += `
                      <div>
                        <h4>Title: ${game.title}</h4>
                        <p>Developer: ${game.developer}</p>
                        <p>Star Rating: ${game.rating}</p>
                        <form class="update-game-list" data-id=${game._id}>
                          <input name="game[title]" type="text" placeholder="Game Title">
                          <input name="game[developer]" type="text" placeholder="Book Developer">
                          <input name="game[rating]" type="text" placeholder="Book Rating">
                          <button type="submit">Update Game</button>
                        </form>
                        <button class="delete-game-list" data-id=${game._id}>Delete Game</button>
                      </div>
                    `
  })

  $('#show-games').html(booksHtml)
}
const onIndexGamesFailure = function () {
  $('#auth-display').text('There was an error')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onIndexGamesSuccess,
  onIndexGamesFailure
}
