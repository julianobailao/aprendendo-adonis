'use strict'

const User = use('App/Models/User')
const UserService = use('App/Services/UserService')
const Controller = use('App/Core/Controller')

class UserController extends Controller {
  async index ({ request, response }) {
    return response.json(await this.service().paginate(request))
  }

  async store ({ request, response }) {
    return response.status(201).json(await this.service().create(request.body))
  }

  async show ({ request, response }) {
    return response.json(await this.service().find(request.params.id))
  }

  async update ({ request, response }) {
    return response.json(await this.service().update(request.params.id, request.body))
  }

  async destroy ({ request, response }) {
    await this.service().delete(request.params.id)

    return response.status(204).json(null)
  }
}

module.exports = UserController
