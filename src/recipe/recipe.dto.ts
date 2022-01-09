import { IsArray, IsNotEmpty, IsString } from "class-validator";

export default class CreateRecipeDto {
    @IsString()
    public recipeName: string;

    @IsString()
    public imageURL: string;

    @IsString()
    public description: string;

    @IsArray()
    @IsNotEmpty()
    public ingredients: string[];
}
