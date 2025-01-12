import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './models/employee/employee';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee) private readonly employeeModel:typeof Employee,){}
    async createEmployee(data:Partial<Employee>){
        return this.employeeModel.create(data);
    }
    async findAll(){
        return this.employeeModel.findAll();
    }
    async findEmployeeById(id:number){
        return this.employeeModel.findByPk(id);
    }
    
}
