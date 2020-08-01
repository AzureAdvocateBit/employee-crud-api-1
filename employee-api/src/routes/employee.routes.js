// @ts-nocheck
/**
 * arquivo: routes/employee-routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 31/07/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

module.exports = router;