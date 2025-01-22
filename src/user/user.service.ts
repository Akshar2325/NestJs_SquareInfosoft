import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './dto/update-User.dto';
import { createUserDTO } from './dto/create-User.dto';

@Injectable()
export class UserService {
    get() {
        return {
            name: "Akshar Bhesaniya",
            age: 21
        };
    }

    // create(req: Request) {
    //     return req.body;

    // }

    // Using the body parameter instead of req
    // create(body: any) {
    //     return body;
    // }

    //Using the dto folder
    create(body: createUserDTO) {
        return body;
    }

    // update(req: Request, param: { userId: number }) {
    //     return { body: req.body, param };
    // }

    //Using DTO
    // update(body: { name: string, age: number }, param: { userId: number }) {
    //     return { body, param };
    // }

    //Using DTO folder
    // update(user: UpdateUserDTO, param: { userId: number }) {
    //     return { user, param };
    // }

    //Doing Something with params(pipeing)
    update(user: UpdateUserDTO, userId: number ) {
        return { user, userId };
    }

    // show(param: { userId: number }) {
    //     return param;
    // }

    // deleteUser(param: { userId: number }) {
    //     return param;
    // }



    //Doing Something with params(pipeing)
    show(userId: number) {
        return userId;
    }

    deleteUser(userId: number ) {
        return userId;
    }
}
