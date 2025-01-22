import { IsNumber, IsString } from "class-validator";


// export class UpdateUserDTO {
    
//     name: string;
//     age: number;
// }   

export class UpdateUserDTO {

    @IsString()
    name: string;

    @IsNumber()
    age: number;
}   