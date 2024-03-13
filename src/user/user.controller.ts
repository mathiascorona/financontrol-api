import { Controller, Get, Param, Req } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
  
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUser() {
        return 'Função';
    }
}