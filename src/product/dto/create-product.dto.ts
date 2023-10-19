import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
    @Field({nullable:false})
    title: string;

    @Field() 
    description: string;
    
    @Field()   
    photoUrl: string;

    @Field()   
    count: number;

    @Field()
    price: number;
}
