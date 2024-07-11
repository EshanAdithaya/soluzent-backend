"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookPageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const root_account_entity_1 = require("../root-account/entitys/root-account.entity");
const typeorm_2 = require("typeorm");
const facebook_page_entity_1 = require("./entitys/facebook-page.entity");
const user_entity_1 = require("../user/entitys/user.entity");
const facebook_posts_entity_1 = require("./entitys/facebook-posts.entity");
let FacebookPageService = class FacebookPageService {
    constructor(facebookPageRepository, rootAccountRepository, userRepository, postRepository) {
        this.facebookPageRepository = facebookPageRepository;
        this.rootAccountRepository = rootAccountRepository;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    async create(createFacebookPageDto) {
        const { rootAccountId, ...rest } = createFacebookPageDto;
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { id: rootAccountId },
        });
        if (!rootAccount) {
            throw new common_1.NotFoundException(`Root Account with ID ${rootAccountId} not found`);
        }
        const newFacebookPage = this.facebookPageRepository.create(createFacebookPageDto);
        return await this.facebookPageRepository.save(newFacebookPage);
    }
    async update(id, updateFacebookPageDto) {
        const { rootAccountId, ...rest } = updateFacebookPageDto;
        const facebookPage = await this.facebookPageRepository.findOne({
            where: { id: id },
        });
        if (!facebookPage) {
            throw new common_1.NotFoundException(`Facebook Page with ID ${id} not found`);
        }
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { accountId: rootAccountId },
        });
        if (!rootAccount) {
            throw new common_1.NotFoundException(`Root Account with ID ${rootAccountId} not found`);
        }
        facebookPage.rootAccount = rootAccount;
        Object.assign(facebookPage, rest);
        return await this.facebookPageRepository.save(facebookPage);
    }
    async findAll(userId) {
        console.log(userId);
        return await this.facebookPageRepository.find({
            where: {
                user: { id: userId },
            },
        });
    }
    async findOne(id) {
        const facebookPage = await this.facebookPageRepository.findOne({
            where: { id: id },
        });
        if (!facebookPage) {
            throw new common_1.NotFoundException(`Facebook Page with ID ${id} not found`);
        }
        return facebookPage;
    }
    async delete(id) {
        const facebookPage = await this.findOne(id);
        await this.facebookPageRepository.remove(facebookPage);
    }
    async createFacebookPost(createPostDto, userId) {
        try {
            const { rootAccountId, pageId, ...postDetails } = createPostDto;
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                return {
                    status: false,
                    message: 'User not found ',
                };
            }
            const rootAccount = await this.rootAccountRepository.findOne({
                where: { id: rootAccountId },
            });
            if (!rootAccount) {
                return {
                    status: false,
                    message: 'Root account not found ',
                };
            }
            const page = await this.facebookPageRepository.findOne({
                where: { id: pageId },
            });
            if (!page) {
                return {
                    status: false,
                    message: 'Page not found not found ',
                };
            }
            const post = this.postRepository.create({
                ...postDetails,
                user,
                rootAccount,
                page,
            });
            this.postRepository.save(post);
        }
        catch (error) {
            return {
                status: false,
                message: 'An error occured when creating the post',
                error: error,
            };
        }
        return { status: true, message: 'Post has been created successfulluy' };
    }
    async updateFacebookPost(postId, updatePostDto) {
        try {
            const post = await this.postRepository.findOne({ where: { id: postId } });
            if (!post) {
                return {
                    status: false,
                    message: 'Post not found',
                };
            }
            Object.assign(post, updatePostDto);
            this.postRepository.save(post);
        }
        catch (error) {
            return {
                status: false,
                message: 'Post update failed',
                error: error,
            };
        }
        return {
            status: true,
            message: 'Post successcully updated',
        };
    }
    async findFacebookPosts(filterDto, userId) {
        const { rootAccountId, pageId } = filterDto;
        const findOptions = {
            where: {},
        };
        if (rootAccountId) {
            findOptions.where['rootAccount'] = { id: rootAccountId };
        }
        if (userId) {
            findOptions.where['user'] = { id: userId };
        }
        if (pageId) {
            findOptions.where['page'] = { id: pageId };
        }
        return { data: await this.postRepository.find(findOptions) };
    }
    async deletePost(postId) {
        const post = await this.postRepository.findOne({ where: { id: postId } });
        if (!post) {
            return {
                status: false,
                message: 'Post not found',
            };
        }
        await this.postRepository.softDelete(postId);
        return {
            status: true,
            message: 'Post successcully deleted',
        };
    }
};
exports.FacebookPageService = FacebookPageService;
exports.FacebookPageService = FacebookPageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(facebook_page_entity_1.FacebookPage)),
    __param(1, (0, typeorm_1.InjectRepository)(root_account_entity_1.RootAccount)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(facebook_posts_entity_1.FacebookPost)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FacebookPageService);
//# sourceMappingURL=facebook-page.service.js.map