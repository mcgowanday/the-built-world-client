'use strict'

const onNewEntryClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Create a new Building Rating!')
  // $('#new-entry-click').trigger('reset')
  $('#new-entry').show()
  $('#new-entry-click').hide()
}
const onNewEntrySuccess = function (response) {
  console.log(response)
  // resetting Game outcome message text to empty string
  // $('#message2').text('')
  // store.game = response.game
  $('#message').text('Entry posted!')
  $('#new-entry').trigger('reset')
  $('#new-entry').hide()
  $('#new-entry-click').show()
  // console.log(store.game)
}
const onNewEntryFailure = function () {
  $('#message').text('Entry failed to post!')
}
const onViewYourEntriesSuccess = function (response) {
  console.log(response)
}
const onViewYourEntriesFailure = function () {
  $('#message').text('Index failed to load!')
}

module.exports = {
  onNewEntryClickSuccess,
  onNewEntrySuccess,
  onNewEntryFailure,
  onViewYourEntriesSuccess,
  onViewYourEntriesFailure
}
