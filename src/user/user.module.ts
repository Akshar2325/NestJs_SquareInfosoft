import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
    controllers: [UserController],
    providers: [UserService],

    //To the auth module for using the authention purposes
    exports:[UserService],
    
    imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule { }
