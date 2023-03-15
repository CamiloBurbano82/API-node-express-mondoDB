const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Employee', EmployeeSchema);

