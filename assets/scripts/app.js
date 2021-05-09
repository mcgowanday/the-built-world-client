'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const buildingEvents = require('./building/events')
const ui = require('./building/ui')
const authUi = require('./auth/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('#sign-out').hide()
  // # initial page view
  $('#change-password-click').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-entry-click').hide()
  $('#new-entry').hide()
  $('#update-entry-click').hide()
  $('#update-entry').hide()
  $('#delete-entry-click').hide()
  $('#delete-entry').hide()
  $('#view-entries').hide()
  $('#hide-entries').hide()
  $('#refresh-entries').hide()

  //
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password-click').on('submit', authUi.onChangePasswordClickSuccess)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  //
  $('#new-entry-click').on('click', ui.onNewEntryClickSuccess)
  $('#new-entry').on('submit', buildingEvents.onNewEntry)
  $('#update-entry-click').on('click', ui.onUpdateEntryClickSuccess)
  $('#update-entry').on('submit', buildingEvents.onUpdateEntry)
  $('#delete-entry-click').on('click', ui.onDeleteEntryClickSuccess)
  $('#delete-entry').on('submit', buildingEvents.onDeleteEntry)
  $('#view-entries').on('click', buildingEvents.onViewEntries)
  $('#hide-entries').on('click', ui.onHideEntriesSuccess)
  $('#refresh-entries').on('click', buildingEvents.onRefreshEntries)
})
