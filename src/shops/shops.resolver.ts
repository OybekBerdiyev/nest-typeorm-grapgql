import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Args, ID, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Shop } from './entities/shop.entity';


@Resolver('shops')
export class ShopsResolver {
  constructor(private readonly shopsService: ShopsService) {}

  @Mutation(() => Shop)
  createShop(@Args('createShop') createShopDto: CreateShopDto) {
    return this.shopsService.create(createShopDto);
  }
  
  @Query(() => [Shop])
  findAllShop() {
    return this.shopsService.findAll();
  }
  
  @Query(() => Shop)
  findOneShop(@Args('id', { type: () => ID }) id: string) {
    return this.shopsService.findOne(+id);
  }
  
  @Mutation(() => Shop)
  updateShop(@Args('id', { type: () => ID }) id: string, @Args('updateShop') updateShopDto: UpdateShopDto) {
    return this.shopsService.update(+id, updateShopDto);
  }
  

  @Mutation(() => String)
  removeShop(@Args('id', { type: () => ID }) id: string) {
    return this.shopsService.remove(+id);
  }
}
