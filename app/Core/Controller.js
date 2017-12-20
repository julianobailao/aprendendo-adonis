'use strict'

class Controller {
  service (name = null) {
    name = name || String(this.constructor.name).replace('Controller', '')
    const service = use('App/Services/' + name + 'Service')

    return new (service)
  }
}

module.exports = Controller
