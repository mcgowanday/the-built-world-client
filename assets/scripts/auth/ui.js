'use strict'
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-in').trigger('reset')
  $('#change-password-click').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#new-entry-click').show()
  $('#view-entries').show()
  $('#entry-view').show()
  $('#update-entry-click').show()
  $('#delete-entry-click').show()
  console.log(response.user)
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed!')
  $('#sign-in').trigger('reset')
}
const onChangePasswordClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Create a new Password!')
  // $('#new-entry-click').trigger('reset')
  $('#change-password').show()
  $('#change-password-click').hide()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Change password failed')
}
const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('User signed out!')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#new-entry').hide()
  $('#update-entry').hide()
  $('#entry-view').hide()
  $('#delete-entry-click').hide()
  $('#entries-text').text('')
}
const onSignOutFailure = function () {
  $('#message').text('Sign out failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordClickSuccess
}
