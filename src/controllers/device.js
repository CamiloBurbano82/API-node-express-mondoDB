const Device = require('../models/device');

exports.allDevices = async (req, res) => {
    try {
        const devices = await Device.find().populate(['id_brand', 'id_reference']);
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todos los equipos' });
    }
}
//validacion de unica en front
exports.createDevice = async (req, res) => {
    try {
        const device = new Device(req.body);
        await device.save();
        res.status(200).json({msg: `Dispostitivo ${device.name} agregado con exito` })
        //res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el dispositivo' });
    }
}

exports.updateDevice = async (req, res) => {
    try {
        const { name, serial, id_brand, id_reference, description, status } = req.body;
        let device = await Device.findById(req.params.id);
        device.name = name;
        device.serial = serial;
        device.id_brand = id_brand;
        device.id_reference = id_reference;
        device.description = description;
        device.status = status;
        device = await Device.findOneAndUpdate({ _id: req.params.id }, device, { new: true }).populate(['id_brand', 'id_reference']);
        res.status(200).json({msg: `Dispositivo ${device.name} actualizado con exito` })
        //res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el equipo' });
    }
}

exports.deleteDevice = async (req, res) => {
    try {
        await Device.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Dispositivo eliminado' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el dispositivo' });
    }
}