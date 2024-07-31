import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { Repository } from 'typeorm';
import { CreateFacebookPageDto } from './dto/CreateFacebookPage.dto';
import { FacebookPage } from './entitys/facebook-page.entity';
import { UpdateFacebookPageDto } from './dto/UpdateFacebookPage.dto';
import { UserEntity } from 'src/user/entitys/user.entity';
import { FacebookPost } from './entitys/facebook-posts.entity';
import { CreatePostDto } from './dto/create-facebook-post.dto';
import { UpdatePostDto } from './dto/update-facebook-post.dto';
import { GetPostsFilterDto } from './dto/filter-facebook-posts.dto';
export declare class FacebookPageService {
    private readonly facebookPageRepository;
    private readonly rootAccountRepository;
    private readonly userRepository;
    private readonly postRepository;
    constructor(facebookPageRepository: Repository<FacebookPage>, rootAccountRepository: Repository<RootAccount>, userRepository: Repository<UserEntity>, postRepository: Repository<FacebookPost>);
    create(createFacebookPageDto: CreateFacebookPageDto): Promise<FacebookPage>;
    update(id: string, updateFacebookPageDto: UpdateFacebookPageDto): Promise<FacebookPage>;
    findAll(userId: string): Promise<FacebookPage[]>;
    findOne(id: string): Promise<FacebookPage>;
    delete(id: string): Promise<void>;
    createFacebookPost(createPostDto: CreatePostDto, userId: string): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        message: string;
        error: any;
    }>;
    updateFacebookPost(postId: string, updatePostDto: UpdatePostDto): Promise<{
        status: boolean;
        message: string;
        error?: undefined;
    } | {
        status: boolean;
        message: string;
        error: any;
    }>;
    findFacebookPosts(filterDto: GetPostsFilterDto, userId: string): Promise<{
        data: FacebookPost[];
    }>;
    deletePost(postId: string): Promise<{
        status: boolean;
        message: string;
    }>;
    classifyMetrics(metrics: string[]): {
        pageMetrics: string[];
        postMetrics: string[];
    };
}
