import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    try {
      return await this.productService.getProducts();
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
