import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Category {
    @Field({nullable: true})
    id: number
    @Field()
    category: string
}