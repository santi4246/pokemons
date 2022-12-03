const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.js');

router.get('/', async (req, res, next) => {
    try {
        const types = await controllers.listTypes();
        res.status(200).send(types);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const { name } = req.body;
    try {
        const type = await controllers.addType(name);
        return res.status(201).json(type);
    } catch (error) {
        next(error);
    }
});

module.exports = router;