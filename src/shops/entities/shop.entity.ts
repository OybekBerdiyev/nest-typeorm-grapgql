import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity('shop')
export class Shop {
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;  

    @Field({nullable: false})
    @Column({nullable: false})
    product_id:number

    @Field({nullable: false})
    @Column({nullable: false})
    user_id:number

    @Field()
    @CreateDateColumn()
    createAt: Date;
    
    @Field()
    @UpdateDateColumn()
    updateAt: Date
}
