const express = require('express');
const router = express.Router();
const menuCtrl = require('../../controllers/api/mainMenus');

// GET /api/mainMenus
router.get('/', menuCtrl.index);
// GET /api/mainMenus/:id
router.get('/:id', menuCtrl.show);

module.exports = router;