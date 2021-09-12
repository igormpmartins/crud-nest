import { Field, InputType } from "@nestjs/graphql";
import { ImageInput } from "./image.input";

@InputType()
export class ProductInput{
    @Field({nullable: true})
    id: number
    @Field()
    description: string
    @Field()
    price: number
    @Field({nullable: true})
    image: ImageInput
}