'use strict'

const Service = use('App/Core/Services/Service')

class ListService extends Service {
  async paginate (request) {
    const { page, perPage } = request.get()

    return await this.model.query().paginate(page || 1, perPage || 15)
  }

  async find(id, fail = true)
  {
    return await this.model[fail ? 'findOrFail' : 'find'](id)
  }
}

module.exports = ListService
