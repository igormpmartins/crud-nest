import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryInput {
    @Field({nullable: true})
    id: number
    @Field()
    category: string
}