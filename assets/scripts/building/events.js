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
const onViewYourEntries = function (event) {
  event.preventDefault()
  api.viewYourEntries()
  // handle success or failure
    .then(ui.onViewYourEntriesSuccess)
    .catch(ui.onViewYourEntriesFailure)
}

module.exports = {
  onNewEntry,
  onViewYourEntries
}