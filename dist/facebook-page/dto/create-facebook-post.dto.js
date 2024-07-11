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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_status_enum_1 = require("../../enums/post-status.enum");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Content of the post' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Facebook Post id of the post' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "contefacebookPostIdnt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of image URLs', type: [String] }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of video URLs', type: [String] }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "videoUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Scheduled date and time for the post',
        required: false,
    }),
    __metadata("design:type", Date)
], CreatePostDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the post',
        enum: post_status_enum_1.PostStatus,
        default: post_status_enum_1.PostStatus.DRAFT,
    }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Root account ID associated with the post' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "rootAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Facebook page ID associated with the post' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "pageId", void 0);
//# sourceMappingURL=create-facebook-post.dto.js.map