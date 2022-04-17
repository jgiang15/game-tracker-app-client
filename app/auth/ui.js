
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p> Signed Up Successfully</p>')
  $('form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p> Signed In Successfully</p>')
  $('form').trigger('reset')
  store.user = response.user
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#log-games').show()
  $('#index-div').show()
  $('#update-game').show()
  $('#delete-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Signed Out Successfully</p>')
  $('form').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#log-games').hide()
  $('#index-div').hide()
  $('#update-game').hide()
  $('#delete-game').hide()
  $('#show-games').hide()
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Sign Out Failed</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Password Changed Successfully</p>')
  $('form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Password Change Failed</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
