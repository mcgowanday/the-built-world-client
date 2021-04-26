'use strict'

let apiUrl
const apiUrls = {
  production: 'https://guarded-cove-25670.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
