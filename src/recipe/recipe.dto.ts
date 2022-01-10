import { IsArray, IsNotEmpty, IsString, IsUrl } from "class-validator";

export default class CreateRecipeDto {
    @IsString()
    public recipeName: string;

    @IsUrl()
    @IsString()
    public imageURL: string;

    @IsString()
    public description: string;

    @IsArray()
    @IsNotEmpty()
    public ingredients: string[];
}
