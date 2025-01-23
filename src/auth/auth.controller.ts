import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {

    // constructor(private authService: AuthService) { }


    // //This api for authention user are exist or not & also it's password verification
    // @Post('/login')
    // async login(@Body() loginDTO: any) {
    //     return this.authService.validateUser(loginDTO.name, loginDTO.password);
    // }

    @UseGuards(AuthGuard('local'))
    //This api for authention user are exist or not & also it's password verification
    @Post('/login')
    // async login(@Body() loginDTO: any) {
    //     return this.authService.validateUser(loginDTO.name, loginDTO.password);
    // }

    //by removing the loginDTO and adding the @Body() decorator, we can directly access the request body
    async login(@Request() req:any) {
        // console.log(req.user);
        return req.user;
    }
}
