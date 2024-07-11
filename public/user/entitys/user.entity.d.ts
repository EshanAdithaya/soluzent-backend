import { UserRole } from 'src/enums/user-role.enum';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { FacebookPost } from 'src/facebook-page/entitys/facebook-posts.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
export declare class UserEntity {
    id: string;
    username: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    posts: FacebookPost[];
    rootAccounts: RootAccount[];
    facebookPages: FacebookPage[];
}
