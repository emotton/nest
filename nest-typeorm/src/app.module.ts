import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './modules/courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'numsey',
    database: 'AulasNest',
    autoLoadEntities: true,
    synchronize: true,
    logging: true
  }), CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
