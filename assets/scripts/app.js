'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const buildingEvents = require('./building/events')
const ui = require('./building/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#view-entries').hide()
  $('#new-entry-click').hide()
  $('#new-entry').hide()
  $('#update-entry-click').hide()
  $('#update-entry').hide()
  //
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  //
  $('#new-entry-click').on('click', ui.onNewEntryClickSuccess)
  $('#new-entry').on('submit', buildingEvents.onNewEntry)
  $('#update-entry-click').on('click', ui.onUpdateEntryClickSuccess)
  $('#update-entry').on('submit', buildingEvents.onUpdateEntry)
  $('#view-entries').on('click', buildingEvents.onViewEntries)
})
