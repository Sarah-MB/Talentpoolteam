const express = require("express");
const { employeeSignIn } = require('../controllers/auth');

const appRoute = express.Router();
const { employeeSignup }  = require('../controllers/employee-signup');
const {employerSignIn} = require("../controllers/employer-signin")

appRoute.get('/', (req, res) => {
  res.render('index', { pageName: 'Home' });
});

appRoute.get('/employer-sign-in', employerSignIn)


appRoute.get('/employee-signin', employeeSignIn);
appRoute.get('/employee-sign-up', employeeSignup );

module.exports = appRoute;