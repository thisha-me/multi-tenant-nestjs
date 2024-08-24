import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PROVIDER } from 'src/constants/providers';
import { Product } from './product.schema';
import { Tenant } from 'src/tenant/tenant.schema';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PROVIDER.PRODUCT_MODEL) private productModel: Model<Product>,
    @Inject(PROVIDER.TENANT_MODEL) private tenantModel: Model<Tenant>,
  ) {}

  async getProducts() {
    return await this.productModel.find().exec();
  }
}
