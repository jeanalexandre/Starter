import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {}

    async validateUser(token: string): Promise<any> {
        // return await this.usersService.findOneByToken(token);
    }

    findOneByToken(token: string) {
        return 'user';
    }
}