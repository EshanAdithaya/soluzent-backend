import { Repository } from 'typeorm';
import { UserEntity } from './entitys/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    findOne(username: string): Promise<UserEntity | undefined>;
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
}
