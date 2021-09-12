import { Field, ObjectType } from "@nestjs/graphql";
import { Image } from "./image";

@ObjectType()
export class Product{
    @Field({nullable: true})
    id: number
    @Field()
    description: string
    @Field()
    price: number
    @Field({nullable: true})
    image: Image
}