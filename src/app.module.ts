import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee/models/employee/employee';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'emp_db',
    models:[Employee],
    autoLoadModels: true,
    synchronize: false,
  }),
  EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
