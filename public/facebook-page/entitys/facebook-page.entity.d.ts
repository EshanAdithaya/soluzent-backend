import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { UserEntity } from 'src/user/entitys/user.entity';
import { FacebookPost } from './facebook-posts.entity';
export declare class FacebookPage {
    id: string;
    pageId: string;
    pageName: string;
    accessToken: string;
    refreshToken: string;
    isActive: boolean;
    expiresIn: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    posts: FacebookPost[];
    rootAccount: RootAccount;
    user: UserEntity;
}
