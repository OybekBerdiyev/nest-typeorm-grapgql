import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { CategoryResolver } from '../category/category.resolver';

@Resolver('product')
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryResolver: CategoryResolver
    ) {}

  @Mutation(()=> Product)
  async createProduct(@Args("createProduct") createProductDto: CreateProductDto, @Args('categoryId') categoryId: number) {
    const product = await this.categoryResolver.findOneCategory(categoryId)
    return this.productService.create(createProductDto, product);
  }

  @Query(()=> [Product])
  findAllProduct() {
    return this.productService.findAll();
  }
  
  @Query(()=> Product)
  findOneProduct(@Args('id', { type: () => ID }) id: string) {
    return this.productService.findOne(+id);
  }

 @Mutation(()=> Product)
  updateProduct(@Args('id', { type: () => ID }) id: string, @Args('updateProduct') updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Mutation(() => String) 
  removeProduct(@Args('id', { type: () => ID }) id: string) {
    return this.productService.remove(+id);
  }
}
