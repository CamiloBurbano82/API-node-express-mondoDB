const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        serial: {
            type: String,
            unique:true,
            required: true
        },
        id_brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand'
        },
        id_reference: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Device_Reference'
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Device', DeviceSchema);

