import { PostStatus } from 'src/enums/post-status.enum';
export declare class UpdatePostDto {
    content?: string;
    facebookPostId?: string;
    imageUrls?: string[];
    videoUrls?: string[];
    scheduledAt?: Date;
    status?: PostStatus;
}
