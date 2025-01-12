import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'emp_db',
    autoLoadModels: true,
    synchronize: true,
  }),
  EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
