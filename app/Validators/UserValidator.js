'use strict'

class UserValidator {
  get rules () {
    let userId = this.ctx.params.id
    let required = userId ? '' : 'required|'

    return {
      'is_active': 'boolean',
      'email': 'required|email|unique:users,email,id,' + userId,
      'password': required + 'min:8|confirmed'
    }
  }
}

module.exports = UserValidator
