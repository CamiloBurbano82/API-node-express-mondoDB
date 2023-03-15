const Device_Reference = require('../models/device_reference');

exports.allDevice_Reference = async (req, res) => {
    try {
        const device_reference = await Device_Reference.find();
        res.status(200).json(device_reference);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas las referencias de los equipos' });
    }
}
//validacion de unica en front
exports.createDevice_Reference = async (req, res) => {
    try {
        const device_reference = new Device_Reference(req.body);
        await device_reference.save();
        res.status(200).json({ msg: `Referencia ${device_reference.name} agregada con exito` })
        //res.status(200).json(device_reference);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la referencia del dispositivo' });
    }
}

exports.updateDevice_Reference = async (req, res) => {
    try {
        const { name } = req.body;
        let device_reference = await Device_Reference.findById(req.params.id);
        device_reference.name = name;
        device_reference = await Device_Reference.findOneAndUpdate({ _id: req.params.id }, device_reference, { new: true });
        res.status(200).json({msg: `Referencia ${device_reference.name} actualizada con exito` })
        //res.status(200).json(device_reference);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la referencia del dispositivo' });
    }
}

exports.deleteDevice_Reference = async (req, res) => {
    try {
        await Device_Reference.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Referencia de dispositivo eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la referencia de dispositivo' });
    }
}