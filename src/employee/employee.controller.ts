import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './models/employee/employee';
import { CreateEmployeeDto } from './dto/create-employee.dto';
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService:EmployeeService){}

    @Post()
    async createEmployee(@Body()  createEmployeeDto: CreateEmployeeDto ){
        return this.employeeService.createEmployee(createEmployeeDto);
    }

    @Get()
    async findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findEmployeeById(@Param('id') id: number) {
    return this.employeeService.findEmployeeById(id);
  }
}
