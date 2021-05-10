'use strict'

const onNewEntryClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Create a new Building Rating!')
  $('#new-entry-click').trigger('reset')
  $('#new-entry').show()
  $('#new-entry-click').hide()
}

const onNewEntrySuccess = function (response) {
  // console.log(response) to test
  $('#message').text('Entry posted!')
  $('#new-entry').trigger('reset')
  $('#new-entry').hide()
  $('#new-entry-click').show()
}

const onNewEntryFailure = function () {
  $('#message').text('Entry Failed to Post!')
  $('#new-entry').hide()
  $('#new-entry-click').show()
}

const onUpdateEntryClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Update your Building Rating!')
  $('#update-entry').show()
  $('#update-entry-click').hide()
}

const onUpdateEntrySuccess = function () {
  $('#update-entry').trigger('reset')
  $('#message').text('Entry Updated!')
  $('#update-entry').hide()
  $('#update-entry-click').show()
}

const onUpdateEntryFailure = function () {
  $('#message').text('Update failed to post!')
  $('#update-entry').hide()
  $('#update-entry-click').show()
}

const onDeleteEntryClickSuccess = function () {
  event.preventDefault()
  $('#message').text('Delete your specified Building Rating!')
  $('#delete-entry').show()
  $('#delete-entry-click').hide()
}

const onDeleteEntrySuccess = function () {
  $('#delete-entry').trigger('reset')
  $('#message').text('Entry Deleted!')
  $('#delete-entry').hide()
  $('#delete-entry-click').show()
}

const onDeleteEntryFailure = function () {
  $('#message').text('Entry Failed to Delete!')
  $('#delete-entry').hide()
  $('#delete-entry-click').show()
}

const onViewEntriesSuccess = function (response) {
  const buildings = response.buildings
  // I console.log(response.buildings) to keep on track
  for (let i = 0; i < buildings.length; i++) {
    const name = response.buildings[i].name
    const city = response.buildings[i].city
    const rating = response.buildings[i].rating
    const id = response.buildings[i]._id
    // console.log(name) to test
    $('#entries-text').append('</br>' + '<u><strong>' + name + ', ' + city + '</u></strong>' + ' –  Rating:  ' +
     '<strong>' + rating + '</strong>' + '</br>' + '<small>Building ID: ' + id + '</small>' + '</br>')
  }
  $('#view-entries').trigger('reset')
  $('#message').text('Viewing All Entries!')
  $('#view-entries').hide()
  $('#hide-entries').show()
  $('#refresh-entries').show()
  // Logs to test
  // console.log(response)
  // console.log(response.buildings[0].name)
  // console.log(response.buildings[0].city)
}

const onViewEntriesFailure = function () {
  $('#message').text('Index Failed to Load!')
}

const onHideEntriesSuccess = function () {
  event.preventDefault()
  $('#hide-entries').trigger('reset')
  $('#message').text('Entries Hidden!')
  $('#entries-text').text('')
  $('#hide-entries').hide()
  $('#refresh-entries').hide()
  $('#view-entries').show()
}

const onHideEntriesFailure = function () {
  $('#message').text('Entries Failed to Hide!')
}

const onRefreshEntriesSuccess = function (response) {
  // clear current entries
  $('#entries-text').text('')
  // run onViewEntriesSuccess function to run appending for loop
  onViewEntriesSuccess(response)
  $('#message').text('Entries Refreshed!')
}

const onRefreshEntriesFailure = function () {
  $('#message').text('Entries Failed to Refresh!')
}

module.exports = {
  onNewEntryClickSuccess,
  onNewEntrySuccess,
  onNewEntryFailure,
  onUpdateEntryClickSuccess,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntryClickSuccess,
  onDeleteEntrySuccess,
  onDeleteEntryFailure,
  onViewEntriesSuccess,
  onViewEntriesFailure,
  onHideEntriesSuccess,
  onHideEntriesFailure,
  onRefreshEntriesSuccess,
  onRefreshEntriesFailure
}
