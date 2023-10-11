const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin_controller")
const shopController = require("../controllers/shop_controller");

router.get( '/showAdmin', adminController.getProducts);
router.get( '/add-product', adminController.getAddProduct );
router.post( '/product', adminController.postAddProduct);
router.get( '/deleteItem/:id', adminController.deleteProduct);
// router.get( '/editItem/:id', adminController.editProduct);

exports.routes = router;