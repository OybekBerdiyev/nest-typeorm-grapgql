import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@ObjectType()
@Entity("category")
export class Category {

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;   

    @Field({nullable: false})
    @Column({nullable: false})
    title:string

    @OneToMany((type)=> Product, (product)=> product.category)
    @Field((type)=> [Product])
    product: Product[]

}
