const mongoose = require('mongoose');

const Device_ReferenceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Device_Reference', Device_ReferenceSchema);

