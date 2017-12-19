'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ request }) {
    const page = request.get().page || 1

    return await User.query().paginate(page)
  }

  async create () {
  }

  async store () {
  }

  async show ({ request }) {
    return await User.findOrFail(request.params.id)
  }

  async edit () {
  }

  async update () {
  }

  async delete () {
  }
}

module.exports = UserController
