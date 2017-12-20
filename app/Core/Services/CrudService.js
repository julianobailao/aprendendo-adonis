'use strict'

const ListService = use('App/Core/Services/ListService')

class CrudService extends ListService {
  async create (data) {
    return await this._save(new (this.model), data)
  }

  async update (id, data) {
    return await this._save(await this.model.findOrFail(id), data)
  }

  async _save (user, data) {
    user.is_active = data.is_active != null ? data.is_active : true
    user.email = data.email

    if (data.password) {
      user.password = data.password
    }

    await user.save()

    return user
  }

  async delete (id) {
    const user = await this.model.findOrFail(id)

    return user.delete()
  }
}

module.exports = CrudService
