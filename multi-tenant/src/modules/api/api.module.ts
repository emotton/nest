import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { TenantModule } from '../tenant/tenant.module';

@Module({
  imports: [
    TenantModule,
  ],
  controllers: [
    ApiController
  ],
  providers: [
    ApiService
  ]
})
export class ApiModule {}