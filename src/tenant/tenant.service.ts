import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './tenant.schema';
import { Model } from 'mongoose';

@Injectable()
export class TenantService {
  constructor(@InjectModel(Tenant.name) private TenantModel: Model<Tenant>) {}

  async getTenantBydId(tenant_id: string): Promise<Tenant> {
    return await this.TenantModel.findOne({ tenant_id }).exec();
  }
}
