const mongoose = require('mongoose');

const Devices_EmployeesSchema = mongoose.Schema(
    {
        id_employee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
        },
        id_device: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Device',
            required: true
        },
        date: {
            type:Date,
            default: Date.now
        },
        observation:{
            type:String,
            required:true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Devices_Employees', Devices_EmployeesSchema);

