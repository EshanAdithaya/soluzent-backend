import { UserEntity } from 'src/user/entitys/user.entity';
import { Repository } from 'typeorm';
import { CreateRootAccountDto } from './dto/CreateRootAccount.dto';
import { UpdateRootAccountDto } from './dto/UpdateRootAccount.dto';
import { RootAccount } from './entitys/root-account.entity';
export declare class RootAccountService {
    private readonly rootAccountRepository;
    private readonly userRepository;
    constructor(rootAccountRepository: Repository<RootAccount>, userRepository: Repository<UserEntity>);
    create(createRootAccountDto: CreateRootAccountDto): Promise<RootAccount>;
    findOne(id: string): Promise<RootAccount>;
    delete(id: string): Promise<void>;
    findAll(userId: string): Promise<RootAccount[]>;
    update(id: string, updateRootAccountDto: UpdateRootAccountDto): Promise<RootAccount>;
}
