const express = require("express");
const appRoute = express.Router();

const { faq, employerMessages, messages, allEmployers, dashboard, adminVerification , adminSettings ,adminEmployee } = require('../../controllers/admin/dashboard');

appRoute.get('/admin-faq', faq);
appRoute.get('/admin-employer-messages', employerMessages);
appRoute.get('/admin-messages', messages);
appRoute.get('/admin-all-employers', allEmployers);
appRoute.get('/admin-dashboard', dashboard);
appRoute.get('/admin-verification', adminVerification)
appRoute.get('/admin-settings', adminSettings)
appRoute.get('/admin-viewEmployee', adminEmployee)

module.exports = appRoute;