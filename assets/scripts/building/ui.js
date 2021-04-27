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

const onUpdateEntryClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Update your Building Rating!')
  // $('#new-entry-click').trigger('reset')
  $('#update-entry').show()
  $('#update-entry-click').hide()
}
const onUpdateEntrySuccess = function () {
  $('#update-entry').trigger('reset')
  $('#message').text('Entry Updated!')
  $('#new-entry').trigger('reset')
  $('#update-entry').hide()
  $('#update-entry-click').show()
}
const onUpdateEntryFailure = function () {
  $('#message').text('Update failed to post!')
}
const onViewEntriesSuccess = function (response) {
  const buildings = response.buildings
  console.log(response.buildings)
  for (let i = 0; i < buildings.length; i++) {
    const name = response.buildings[i].name
    const city = response.buildings[i].city
    const rating = response.buildings[i].rating
    const id = response.buildings[i]._id
    // console.log(name)
    $('#entries-text').append(name + ', ' + city + '.  Rating:  ' + rating + '</br>' + 'Building ID: ' + id + '</br>' + '</br>')
    $('#view-entries').trigger('reset')
    $('#entries-text').text()
  }
  // console.log(response)
  // console.log(response.buildings[0].name)
  // console.log(response.buildings[0].city)
  // buildings.forEach((item, i) => {
}

// $('#entries-text').text(response.buildings)
const onViewEntriesFailure = function () {
  $('#message').text('Index failed to load!')
}

module.exports = {
  onNewEntryClickSuccess,
  onNewEntrySuccess,
  onNewEntryFailure,
  onViewEntriesSuccess,
  onViewEntriesFailure,
  onUpdateEntryClickSuccess,
  onUpdateEntrySuccess,
  onUpdateEntryFailure
}
