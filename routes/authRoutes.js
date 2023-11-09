/**
 * @openapi
 * /products:
 *   get:
 *     summary: Get a list of products
 *     description: Retrieve a list of all products available.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */


const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);

module.exports = router;
