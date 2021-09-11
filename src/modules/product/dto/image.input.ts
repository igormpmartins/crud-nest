import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ImageInput{
    @Field({nullable: true})
    id: number
    @Field()
    description: string
    @Field()
    url: string
    @Field({nullable: true})
    product_id: number
}