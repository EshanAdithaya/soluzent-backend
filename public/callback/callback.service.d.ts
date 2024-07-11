import { OAuthCallbackDto } from './dto/oauth-callback.dto';
import { RootAccountService } from 'src/root-account/root-account.service';
import { FacebookPageService } from 'src/facebook-page/facebook-page.service';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entitys/user.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
export declare class CallbackService {
    private readonly rootAccountService;
    private readonly facebookPageService;
    private facebookPageEntity;
    private userRepository;
    private rootAccount;
    constructor(rootAccountService: RootAccountService, facebookPageService: FacebookPageService, facebookPageEntity: Repository<FacebookPage>, userRepository: Repository<UserEntity>, rootAccount: Repository<RootAccount>);
    handleOAuthCallback(provider: string, userId: string, pageLinked: boolean, oAuthCallbackDto: OAuthCallbackDto): Promise<any>;
    private getBasicUserData;
}
