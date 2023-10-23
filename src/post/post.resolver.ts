import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersResolver } from '../users/users.resolver';
import { Post } from './entities/post.entity';

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly usersResolver: UsersResolver,
    ) {}

  @Mutation(()=> Post)
  async createPost(@Args('createPost') createPostDto: CreatePostDto, @Args('authorId') authorId: number) {
    const author = await this.usersResolver.findOneUser(authorId);
    return this.postService.create(createPostDto, author);
  }

  @Query(()=> [Post])
  findAllPost() {
    return this.postService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.postService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
