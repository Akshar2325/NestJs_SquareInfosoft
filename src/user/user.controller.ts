import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./dto/update-User.dto";
import { createUserDTO } from "./dto/create-User.dto";

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


    // @Post()
    // store(@Req() req: Request) {
    //     console.log(req.body);
    //     // return 'req';
    //     return this.userService.create(req);
    // }

    //Using the body parameter instead of req
    // @Post()
    // store(@Body() body: any) {
    //     // console.log(req.body);
    //     // return 'req';

    //     return this.userService.create(body);
    // }

    @Post()
    store(@Body() body: createUserDTO) {
        // console.log(req.body);
        // return 'req';

        return this.userService.create(body);
    }

    // @Patch('/:userId')
    // updateUser(@Req() req: Request, @Param() param: { userId: number }) {
    //     console.log(req.body);
    //     // return req.body;
    //     return this.userService.update(req, param);
    // }

    //Using the body parameter instead of req
    // @Patch('/:userId')
    // updateUser(@Body() body: any, @Param() param: { userId: number }) {
    //     // console.log(req.body);
    //     // return req.body;
    //     return this.userService.update(body, param);
    // }

    //Using the DTO
    // @Patch('/:userId')
    // updateUser(
    //     @Body() body: { name: string, age: number },
    //     @Param() param: { userId: number }
    // ) {
    //     // console.log(req.body);
    //     // return req.body;
    //     return this.userService.update(body, param);
    // }

    //Using the DTO folder
    // @Patch('/:userId')
    // updateUser(
    //     @Body() body: UpdateUserDTO,
    //     @Param() param: { userId: number }
    // ) {
    //     // console.log(req.body);
    //     // return req.body;
    //     return this.userService.update(body, param);
    // }

    //Doing Something with params(pipeing)
    @Patch('/:userId')
    updateUser(
        @Body() body: UpdateUserDTO,
        @Param('userId',ParseIntPipe) userId: number 
    ) {
        // console.log(req.body);
        // return req.body;
        return this.userService.update(body, userId);
    }

    // @Get('/:userId')
    // getUser(@Param() param: { userId: number }) {
    //     // return param;
    //     return this.userService.show(param);
    // }

    //Doing Something with params(pipeing)
    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId: number ) {
        // return param;
        return this.userService.show(userId);
    }

    // @Delete('/:userId')
    // deleteUser(@Param() param: { userId: number }) {
    //     // return userId;
    //     return this.userService.deleteUser(param);
    // }

    //Doing Something with params(pipeing)
    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number ) {
        // return userId;
        return this.userService.deleteUser(userId);
    }
}
