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
exports.FacebookPageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreateFacebookPage_dto_1 = require("./dto/CreateFacebookPage.dto");
const UpdateFacebookPage_dto_1 = require("./dto/UpdateFacebookPage.dto");
const facebook_page_entity_1 = require("./entitys/facebook-page.entity");
const facebook_page_service_1 = require("./facebook-page.service");
const auth_guard_1 = require("../auth.guard");
const create_facebook_post_dto_1 = require("./dto/create-facebook-post.dto");
const facebook_posts_entity_1 = require("./entitys/facebook-posts.entity");
const update_facebook_post_dto_1 = require("./dto/update-facebook-post.dto");
const filter_facebook_posts_dto_1 = require("./dto/filter-facebook-posts.dto");
let FacebookPageController = class FacebookPageController {
    constructor(facebookPageService) {
        this.facebookPageService = facebookPageService;
    }
    async create(createDto) {
        return this.facebookPageService.create(createDto);
    }
    async findAll(req) {
        return this.facebookPageService.findAll(req.user.userId);
    }
    async findOne(id) {
        return this.facebookPageService.findOne(id);
    }
    async update(id, updateDto) {
        return this.facebookPageService.update(id, updateDto);
    }
    async delete(id) {
        return this.facebookPageService.delete(id);
    }
    async createFacebookPost(createPostDto, req) {
        return this.facebookPageService.createFacebookPost(createPostDto, req.user.userId);
    }
    async updateFacebookPost(id, updatePostDto) {
        return this.facebookPageService.updateFacebookPost(id, updatePostDto);
    }
    async getPosts(filterDto, req) {
        const { rootAccountId, pageId } = filterDto;
        if (!rootAccountId && !req.user.userId && !pageId) {
            throw new common_1.BadRequestException('At least one filter must be provided');
        }
        return this.facebookPageService.findFacebookPosts(filterDto, req.user.userId);
    }
    async deletePost(id) {
        try {
            return await this.facebookPageService.deletePost(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
};
exports.FacebookPageController = FacebookPageController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Facebook Page' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The Facebook Page has been successfully created.',
        type: facebook_page_entity_1.FacebookPage,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid data provided.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFacebookPage_dto_1.CreateFacebookPageDto]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Facebook Pages' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all Facebook Pages.',
        type: [facebook_page_entity_1.FacebookPage],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Facebook Page by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the Facebook Page.',
        type: facebook_page_entity_1.FacebookPage,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Facebook Page not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Facebook Page by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the updated Facebook Page.',
        type: facebook_page_entity_1.FacebookPage,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Facebook Page not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateFacebookPage_dto_1.UpdateFacebookPageDto]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Facebook Page by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The Facebook Page has been successfully deleted.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Facebook Page not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create-post'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new post' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The post has been successfully created.',
        type: facebook_posts_entity_1.FacebookPost,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_facebook_post_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "createFacebookPost", null);
__decorate([
    (0, common_1.Patch)('/update-post/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Facebook post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The post has been successfully updated.',
        type: facebook_posts_entity_1.FacebookPost,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_facebook_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "updateFacebookPost", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/get-posts-filter'),
    (0, swagger_1.ApiOperation)({ summary: 'Get posts based on filters' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Posts retrieved successfully',
        type: [facebook_posts_entity_1.FacebookPost],
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_facebook_posts_dto_1.GetPostsFilterDto, Object]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Delete)('/delete-post/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Post ID to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Post deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FacebookPageController.prototype, "deletePost", null);
exports.FacebookPageController = FacebookPageController = __decorate([
    (0, swagger_1.ApiTags)('Facebook Pages'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('facebook-pages'),
    __metadata("design:paramtypes", [facebook_page_service_1.FacebookPageService])
], FacebookPageController);
//# sourceMappingURL=facebook-page.controller.js.map