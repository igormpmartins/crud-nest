import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Image{
    @Field({nullable: true})
    id: number
    @Field()
    description: string
    @Field()
    url: string
    @Field()
    product_id: number
}