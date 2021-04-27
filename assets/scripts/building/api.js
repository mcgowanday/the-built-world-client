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

const updateEntry = function (data) {
  console.log(data)
  console.log(data.building.ID)
  return $.ajax({
    url: config.apiUrl + '/buildings/' + data.building.ID,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
// const update = function (data) {
//   return $.ajax({
//     url: app.host + '/books/' + data.book.id,
//     method: 'PATCH',
//     data
//   })
// }
const viewEntries = function () {
  // console.log(data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/buildings',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newEntry,
  viewEntries,
  updateEntry
}
