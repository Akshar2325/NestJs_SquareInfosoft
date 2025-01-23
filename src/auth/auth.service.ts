import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

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
}
