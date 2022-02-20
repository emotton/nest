import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Api } from './api.entity';

@Controller('apis')
export class ApiController {

  constructor(private readonly apiService: ApiService) {}

  @Get()
  async findAll(): Promise<Api[]> {
    return this.apiService.findAll();
  }

}