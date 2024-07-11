import { UserEntity } from 'src/user/entitys/user.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
export declare class FacebookPost {
    id: string;
    content: string;
    facebookPostId: string;
    imageUrls: string[];
    videoUrls: string[];
    scheduledAt: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    user: UserEntity;
    rootAccount: RootAccount;
    page: FacebookPage;
}
