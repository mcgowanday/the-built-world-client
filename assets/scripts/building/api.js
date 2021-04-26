'use strict'
const config = require('./../config')
const store = require('./../store')

const newEntry = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/buildings',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newEntry
}
