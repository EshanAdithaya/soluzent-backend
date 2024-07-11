import { PostStatus } from 'src/enums/post-status.enum';
export declare class CreatePostDto {
    content: string;
    contefacebookPostIdnt: string;
    imageUrls: string[];
    videoUrls: string[];
    scheduledAt?: Date;
    status?: PostStatus;
    rootAccountId: string;
    pageId: string;
}
