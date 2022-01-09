import { IsNotEmpty, IsString } from "class-validator";

export default class CreateRecipeDto {
    @IsString()
    public recipeName: string;

    @IsString()
    public imageURL: string;

    @IsString()
    public description: string;

    @IsNotEmpty()
    public ingredients: string[];
}
