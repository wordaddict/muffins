const express = require('express');
const bodyParser = require('body-parser');
const ToppingsModel = require('../models/toppings');
const SizesModel = require('../models/sizes');
const VariantsModel = require('../models/variants');
const { mongoose } = require('../config/config');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Add variants
router.post('/variants', (req, res) => {
    const { variants } = req.body;
    if (!variants){
        return res.statusCode(400).send({
            error: true,
            code: 400,
            message: "kindly pass the variants in the req body"
        })
    }
    const params = {
        variants
    }
    return VariantsModel.create(params)
        .then((data) => {
            return res.send({
                error: false,
                code: 202,
                message: "variants created successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "something went wrong"
            })
        });
});

// Add toppings
router.post('/toppings', (req, res) => {
    const { toppings } = req.body;
    if (!toppings){
        return res.statusCode(400).send({
            error: true,
            code: 400,
            message: "kindly pass the toppings in the req body"
        })
    }
    const params = {
        toppings
    }
    return ToppingsModel.create(params)
        .then((data) => {
            return res.send({
                error: false,
                code: 202,
                message: "toppings created successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "something went wrong"
            })
        })
})

// Add sizes
router.post('/sizes', (req, res) => {
    const { size, price } = req.body;
    if (!size || !price){
        return res.statusCode(400).send({
            error: true,
            code: 400,
            message: "kindly pass the size, price in the req body"
        })
    }
    const params = {
        name: size,
        price
    }
    return SizesModel.create(params)
        .then((data) => {
            return res.send({
                error: false,
                code: 202,
                message: "size created successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "something went wrong"
            })
        });
});

// get all variants
router.get('/variants', (req, res) => {
    return VariantsModel.find()
        .then((data) => {
            return res.send({
                error: false,
                code: 200,
                message: "All varaints gotten successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "Internal server error"
            })
        })
})

// get all toppings
router.get('/toppings', (req, res) => {
    return ToppingsModel.find()
        .then((data) => {
            return res.send({
                error: false,
                code: 200,
                message: "All toppings gotten successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "Internal server error"
            })
        })
})

// get all sizes
router.get('/sizes', (req, res) => {
    return SizesModel.find()
        .then((data) => {
            return res.send({
                error: false,
                code: 200,
                message: "All sizes gotten successfully",
                data
            })
        })
        .catch(() => {
            return res.send({
                error: true,
                code: 500,
                message: "Internal server error"
            })
        })
})

module.exports = router;