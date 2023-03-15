const DB = require('./src/config/db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/v1/brand', require('./src/routes/brand'));
app.use('/api/v1/device_reference', require('./src/routes/device_reference'));
app.use('/api/v1/device_employees', require('./src/routes/device_employees'));
app.use('/api/v1/device', require('./src/routes/device'));
app.use('/api/v1/employee', require('./src/routes/employee'));

DB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    })
})

