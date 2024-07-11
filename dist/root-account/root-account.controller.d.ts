import { CreateRootAccountDto } from './dto/CreateRootAccount.dto';
import { UpdateRootAccountDto } from './dto/UpdateRootAccount.dto';
import { RootAccount } from './entitys/root-account.entity';
import { RootAccountService } from './root-account.service';
export declare class RootAccountController {
    private readonly rootAccountService;
    constructor(rootAccountService: RootAccountService);
    create(createRootAccountDto: CreateRootAccountDto): Promise<RootAccount>;
    update(id: string, updateRootAccountDto: UpdateRootAccountDto): Promise<RootAccount>;
    findOne(id: string): Promise<RootAccount>;
    findall(req: any): Promise<RootAccount[]>;
    remove(id: string): Promise<void>;
}
