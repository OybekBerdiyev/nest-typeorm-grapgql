import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from "../../users/entities/user.entity";

@ObjectType()
@Entity('post')
export class Post {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable:false})
    @Column({nullable: false})
    title: string;

    @Field()
    @Column()
    content: string;

    @ManyToOne((type)=> User, (author)=> author.posts)
    @Field((type)=> User)
    author: User;

}