import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { Post } from '../post/entities/post.entity';
import { PostResolver } from '../post/post.resolver';
import { PostService } from '../post/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver,PostService, PostResolver],
})
export class UsersModule {}
