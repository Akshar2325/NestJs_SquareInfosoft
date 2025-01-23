import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDTO } from './dto/update-User.dto';
import { createUserDTO } from './dto/create-User.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) { }

    // get() {
    //     return {
    //         name: "Akshar Bhesaniya",
    //         age: 21
    //     };
    // }

    //Get data from database
    get(): Promise<User[]> {
        return this.UserRepository.find();
    }
    // create(req: Request) {
    //     return req.body;

    // }

    // Using the body parameter instead of req
    // create(body: any) {
    //     return body;
    // }

    //Using the dto folder
    // create(body: createUserDTO) {
    //     return body;
    // }

    //Get data from database
    create(body: createUserDTO) {
        return this.UserRepository.save(body);
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
    // update(user: UpdateUserDTO, userId: number) {
    //     return { user, userId };
    // }

    //Update data in database
    update(updateUserDTO: UpdateUserDTO, userId: number) {
        return this.UserRepository.update(userId, updateUserDTO);
    }
    // show(param: { userId: number }) {
    //     return param;
    // }

    // deleteUser(param: { userId: number }) {
    //     return param;
    // }



    //Doing Something with params(pipeing)
    // show(userId: number) {
    //     return userId;
    // }

    //Get specific id data from database
    show(userId: number) {
        return this.UserRepository.findOne({ where: { id: userId } });
    }

    findByName(name: string) {
        return this.UserRepository.findOne({ where: { name } });
    }

    // deleteUser(userId: number) {
    //     return userId;
    // }

    //Delete data from database
    deleteUser(userId: number) {
        return this.UserRepository.delete(userId);
    }

}
