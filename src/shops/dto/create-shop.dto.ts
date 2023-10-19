import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateShopDto {

    @Field({nullable: false})
    user_id: number;
    
    @Field({nullable: false})
    product_id: number;
}
