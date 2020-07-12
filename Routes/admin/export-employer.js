const express = require('express');
const { authorize } = require('../../Middleware/index');
const Role = require('../../Middleware/role');
const { getUsers } = require('../../Controllers/admin/export-employer');

const router = express.Router();

router.route('/employers-csv', authorize(Role.Admin)).get(getUsers);

module.exports = router;
