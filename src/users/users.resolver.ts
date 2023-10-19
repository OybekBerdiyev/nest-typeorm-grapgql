import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUser') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Query(() => [User])
  async findAllUser() {
    return this.usersService.findAll();
  }
  
  @Query(() => User)
  async findOneUser(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(+id);
  }

  @Mutation(() => User)
  async updateUser(@Args('id', { type: () => ID }) id: string, @Args('updateUser') updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Mutation(() => ID) 
  async removeUser(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.remove(+id);
  }

}