import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(name: string, password: string) {

        const user = await this.userService.findByName(name);

        // if (user) {

        //     if (user.password === password) {
        //         return "user exists";
        //     }
        //     return "incorrect password";
        // }
        // return "unauthenticated";

        if (user && user.password === password) {
            const { password, ...result } = user;
            return user;
          }
          return null;
    }


    async login(user:any){
        const paylod = {username: user.name, sub: user.id};
        return{
            access_token: this.jwtService.sign(paylod),
        }
    }
}
