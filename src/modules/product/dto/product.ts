import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product{
    @Field()
    id: number
    @Field()
    description: string
    @Field()
    price: number
}