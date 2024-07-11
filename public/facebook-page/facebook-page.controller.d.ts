import { CreateFacebookPageDto } from './dto/CreateFacebookPage.dto';
import { UpdateFacebookPageDto } from './dto/UpdateFacebookPage.dto';
import { FacebookPage } from './entitys/facebook-page.entity';
import { FacebookPageService } from './facebook-page.service';
import { CreatePostDto } from './dto/create-facebook-post.dto';
import { FacebookPost } from './entitys/facebook-posts.entity';
import { UpdatePostDto } from './dto/update-facebook-post.dto';
import { GetPostsFilterDto } from './dto/filter-facebook-posts.dto';
export declare class FacebookPageController {
    private readonly facebookPageService;
    constructor(facebookPageService: FacebookPageService);
    create(createDto: CreateFacebookPageDto): Promise<FacebookPage>;
    findAll(req: any): Promise<FacebookPage[]>;
    findOne(id: string): Promise<FacebookPage>;
    update(id: string, updateDto: UpdateFacebookPageDto): Promise<FacebookPage>;
    delete(id: string): Promise<void>;
    createFacebookPost(createPostDto: CreatePostDto, req: any): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        message: string;
        error: any;
    }>;
    updateFacebookPost(id: string, updatePostDto: UpdatePostDto): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        message: string;
        error: any;
    }>;
    getPosts(filterDto: GetPostsFilterDto, req: any): Promise<{
        data: FacebookPost[];
    }>;
    deletePost(id: string): Promise<{
        status: boolean;
        message: string;
    }>;
}
