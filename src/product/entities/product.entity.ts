import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Category } from "../../category/entities/category.entity";

@ObjectType()
@Entity('product')
export class Product {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable:false})
    @Column({nullable: false})
    title: string;

    @Field()
    @Column()
    description: string;
    
    @Field()
    @Column()
    photoUrl: string;

    @Field()
    @Column()
    count: number;

    @Field()
    @Column()
    price: number;

    @Field()
    @CreateDateColumn()
    createAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updateAt: Date

    @ManyToOne((type)=> Category, (category)=> category.product)
    @Field((type)=> Category)
    category: Category;

}
