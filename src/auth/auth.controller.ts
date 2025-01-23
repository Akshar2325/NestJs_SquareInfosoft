import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(private userService: UserService) { }

    @Post('/login')
    async login(@Body() loginDTO: any) {
        const user = await this.userService.findByName(loginDTO.name);

        if (user) {
            if(user.password === loginDTO.password){
                return "user exists";
            }
            return "incorrect password";
        }
        return "unauthenticated";
    }
}
