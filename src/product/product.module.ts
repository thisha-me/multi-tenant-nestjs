import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TenantsMiddleware } from 'src/middlewares/tenants.middleware';
import { TenantConnectionProvider } from 'src/providers/tenant-connection.provider';
import { TenantModels } from 'src/providers/tenant-models.provider';

@Module({
  providers: [ProductService, TenantModels.productModel, TenantModels.tenantModel],
  controllers: [ProductController],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductController);

    //Use the wildcard character (*) to apply the middleware to all routes in the module.
  }
}
