import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryResolver } from './category.resolver';
import { ProductService } from '../product/product.service';
import { ProductResolver } from '../product/product.resolver';
import { Product } from '../product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryResolver, ProductService, ProductResolver],
})
export class CategoryModule {}
