const Brand = require('../models/brand');

exports.allBrand = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas las marcas' })
    }
}
//validacion de unica en front
exports.createBrand = async (req, res) => {
    try {
        const brand = new Brand(req.body);
        await brand.save();
        //res.status(200).json(brand);
        res.status(200).json({ msg: `Marca ${brand.name} agregada con exito` })
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la marca' });
    }
}

exports.updateBrand = async (req, res) => {
    try {
        const { name } = req.body;
        let brand = await Brand.findById(req.params.id);
        brand.name = name;
        brand = await Brand.findOneAndUpdate({ _id: req.params.id }, brand, { new: true });
        //res.status(200).json(brand);
        res.status(200).json({msg: `Marca ${brand.name} actualizada con exito` })
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la marca' });
    }
}

exports.deleteBrand = async (req, res) => {
    try {
        await Brand.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Marca eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la marca' });
    }
}