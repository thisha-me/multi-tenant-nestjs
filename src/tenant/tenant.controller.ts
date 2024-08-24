import { Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async getTenants() {
    try {
      return await this.tenantService.getTenantBydId('ABC');
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
