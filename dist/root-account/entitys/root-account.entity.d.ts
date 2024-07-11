import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { FacebookPost } from 'src/facebook-page/entitys/facebook-posts.entity';
import { UserEntity } from 'src/user/entitys/user.entity';
import { YoutubeChannel } from 'src/youtube-channel/entitys/youtube-channel.entity';
export declare class RootAccount {
    id: string;
    platform: string;
    accountId: string;
    accountName: string;
    accessToken: string;
    refreshToken: string;
    fbProfileUrl: string;
    expiresIn: number;
    email: string;
    pageLinked: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    posts: FacebookPost[];
    user: UserEntity;
    youtubeChannels: YoutubeChannel[];
    pages: FacebookPage[];
}
