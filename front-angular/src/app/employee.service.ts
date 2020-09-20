/**
 * arquivo: app/employee.service.ts
 * descrição: arquivo responsável por realizar as transições de request entre o Back -> Front
 * data: 14/09/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 * Doc HttpClient Angular: https://angular.io/api/common/http/HttpClient#http-request-example
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/api'; // ==> Vindo do meu Back-End

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por criar um 'New Employee'
   */
  // tslint:disable-next-line:typedef
  createNewEmployee(employeeName, jobRole, salary, birth, employeeRegistration) {
    const employee = {
      employeeName,
      jobRole,
      salary,
      birth,
      employeeRegistration
    };
    console.log(employee);

    // ==> (POST - url no Back-End): http://locahost:3000/api/employees
    this
      .http
      .post(`${this.uri}/employees`, employee)
      .subscribe(res => console.log('Feito'));
  }

}