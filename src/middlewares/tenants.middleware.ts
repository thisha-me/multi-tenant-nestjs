import { BadRequestException, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantService } from 'src/tenant/tenant.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {


  async use(req: Request, res: Response, next: NextFunction) {
    const tenant_id = req.headers['x-tenant-id']?.toString();
    if (!tenant_id) {
      throw new BadRequestException('X-TENANT-ID not provided');
    }

    const isTenantExist = await this.tenantService.getTenantBydId(tenant_id);
    if (!isTenantExist) {
      throw new NotFoundException('Tenant not found');
    }

    req['tenant_id'] = tenant_id;
    next();
  }
}
