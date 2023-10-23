import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategory') createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Query(() => [Category])
  async findAllCategory() {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  async findOneCategory(@Args('id', { type: () => ID }) id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('id', { type: () => ID }) id: number, @Args("updateCategory") updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Mutation(() => String)
  async removeCategory(@Args('id', { type: () => ID }) id: number) {
    return this.categoryService.remove(id);
  }
}
