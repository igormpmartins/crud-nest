import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductInput{
    @Field({nullable: true})
    id: number
    @Field()
    description: string
    @Field()
    price: number
}