import { Inject } from '@nestjs/common';

import { TenantService } from '../tenant/tenant-service.decorator';
import { TENANT_CONNECTION } from '../tenant/tenant.module';
import { Api } from './api.entity';

@TenantService()
export class ApiService {

  constructor(@Inject(TENANT_CONNECTION) private connection) { }

  async findAll(): Promise<Api[]> {
    const repository = await this.connection.getRepository(Api);
    return repository.find();
  }
}