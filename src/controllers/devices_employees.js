const Devices_Employees = require('../models/devices_employees');

exports.allDevices_Employees = async (req, res) => {
    try {
        const devices_employees = await Devices_Employees.find()
            .populate('id_employee')
            .populate(
                {
                    path: 'id_device',
                    model: 'Device',
                    populate:{path:'id_brand'}
                }
            )
            .populate(
                {
                    path: 'id_device',
                    model: 'Device',
                    populate:{path:'id_reference'}
                }
            )
        res.status(200).json(devices_employees);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas las asignaciones de los equipos' });
    }
}
//validacion de unica en front
exports.createDevices_Employees = async (req, res) => {
    try {
        const devices_employees = new Devices_Employees(req.body);
        await devices_employees.save();
        res.status(200).json({msg: `Asignación del dispositivo creada con exito` })
        //res.status(200).json(devices_employees);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la asignación del dispositivo' });
    }
}

exports.updateDevices_Employees = async (req, res) => {
    try {
        const { id_employee, id_device, observation } = req.body;
        let devices_employees = await Devices_Employees.findById(req.params.id);
        devices_employees.id_employee = id_employee;
        devices_employees.id_device = id_device;
        devices_employees.observation = observation;
        devices_employees = await Devices_Employees.findOneAndUpdate({ _id: req.params.id }, devices_employees, { new: true });
        res.status(200).json({msg: `Asignación del dispositivo actualizada con exito` })
        //res.status(200).json(devices_employees);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la asignación del dispositivo' });
    }
}

exports.deleteDevice_Employees = async (req, res) => {
    try {
        await Devices_Employees.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Asignación del dispositivo eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la asignación del dispositivo' });
    }
}