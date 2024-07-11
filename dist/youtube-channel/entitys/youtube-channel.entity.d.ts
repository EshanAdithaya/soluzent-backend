import { RootAccount } from 'src/root-account/entitys/root-account.entity';
export declare class YoutubeChannel {
    id: number;
    channelId: string;
    channelName: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    rootAccount: RootAccount;
}
