'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
// /Users/mcgowanday/SEI/projects/buildings-client/lib/get-form-fields.js
// /Users/mcgowanday/SEI/projects/buildings-client/assets/scripts/auth/events.js
const api = require('./api')
const ui = require('./ui')

const onNewEntry = function (event) {
  event.preventDefault()
  // get the data from the sign-in form
  const form = event.target
  const data = getFormFields(form)
  // pass data to an an api function
  api.newEntry(data)
  // handle success or failure
    .then(ui.onNewEntrySuccess)
    .catch(ui.onNewEntryFailure)
}
const onUpdateEntry = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateEntry(data)
    .then(ui.onUpdateEntrySuccess)
    .catch(ui.onUpdateEntryFailure)
}
const onDeleteEntry = function (event) {
  event.preventDefault()
  const form = event.target
  const id = getFormFields(form)
  api.deleteEntry(id)
    .then(ui.onDeleteEntrySuccess)
    .catch(ui.onDeleteEntryFailure)
}
const onViewEntries = function (event) {
  event.preventDefault()
  // $('#entries-text').text('')
  api.viewEntries()
  // handle success or failure
    .then(ui.onViewEntriesSuccess)
    .catch(ui.onViewEntriesFailure)
}
const onRefreshEntries = function () {
  event.preventDefault()
  // $('#entries-text').text('')
  api.viewEntries()
  // handle success or failure
    .then(ui.onRefreshEntriesSuccess)
    .catch(ui.onRefreshEntriesFailure)
}

module.exports = {
  onNewEntry,
  onUpdateEntry,
  onDeleteEntry,
  onViewEntries,
  onRefreshEntries
}
