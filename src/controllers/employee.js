const Employee = require('../models/employee');

exports.allEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todos los empleados' });
    }
}
//validacion de unica en front
exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).json({msg: `Empleado ${employee.name} agregado con exito` })
        //res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el empleado' });
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const { name, surname, address, phone, email } = req.body;
        let employee = await Employee.findById(req.params.id);
        employee.name = name;
        employee.surname = surname;
        employee.address = address;
        employee.phone =phone;
        employee.email=email;
        employee = await Employee.findOneAndUpdate({ _id: req.params.id }, employee, { new: true });
        res.status(200).json({msg: `Empleado ${employee.name} actualizado con exito` })
        //res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el empleado' });
    }
}

exports.deleteDevice = async (req, res) => {
    try {
        await Employee.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Empleado eliminado' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el empleado' });
    }
}