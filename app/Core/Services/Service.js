'use strict'

class Service {
  constructor () {
    this.model = use('App/Models/' + String(this.constructor.name).replace('Service', ''))
  }
}

module.exports = Service
