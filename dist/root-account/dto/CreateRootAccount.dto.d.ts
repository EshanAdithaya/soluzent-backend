import { SocialMediaPlatform } from 'src/enums/social-media-platform.enum';
export declare class CreateRootAccountDto {
    platform: SocialMediaPlatform;
    accountId: string;
    accountName: string;
    accessToken: string;
    refreshToken: string;
    pageLinked?: boolean;
    email?: string;
    fbProfileUrl?: string;
    expiresIn: number;
    userId: string;
}
