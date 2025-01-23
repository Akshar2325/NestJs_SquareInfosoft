// export class createUserDTO {
//     name: string;
//     age: number;
// }

import { IsNumber, IsString } from "class-validator";



export class createUserDTO {

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    password: string;
}   