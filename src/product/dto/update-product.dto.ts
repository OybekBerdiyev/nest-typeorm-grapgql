import { Field} from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto {
    @Field({nullable:true})
    title?: string;

    @Field({nullable:true}) 
    description?: string;
    
    @Field({nullable:true})   
    photoUrl?: string;

    @Field({nullable:true})   
    count?: number;

    @Field({nullable:true})
    price?: number;


}
