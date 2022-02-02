const Employee = require('./Employee')

class Manage extends Employee {
    constructor(id, name, emai, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;