import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {

    // private userService;
    // constructor(userService: UserService){
    //     this.userService = userService;
    // }

    //Short hand
    constructor(private userService: UserService) { }  //Dependency Injection


    @Get()
    getUsers() {
        // return {
        //     name: "Akshar",
        //     age: 21
        // };
        return this.userService.get();
    }


    @Post()
    store(@Req() req: Request) {
        console.log(req.body);
        // return 'req';
        return this.userService.create(req);
    }

    @Patch('/:userId')
    updateUser(@Req() req: Request, @Param() param: { userId: number }) {
        console.log(req.body);
        // return req.body;
        return this.userService.update(req, param);
    }

    @Get('/:userId')
    getUser(@Param() param: { userId: number }) {
        // return param;
        return this.userService.show(param);
    }

    @Delete('/:userId')
    deleteUser(@Param() param: {userId: number}) {
        // return userId;
        return this.userService.deleteUser(param);
    }
}
