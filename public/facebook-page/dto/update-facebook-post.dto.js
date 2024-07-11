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
exports.UpdatePostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_status_enum_1 = require("../../enums/post-status.enum");
class UpdatePostDto {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Content of the post', required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Facebook Post ID', required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "facebookPostId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of image URLs',
        type: [String],
        required: false,
    }),
    __metadata("design:type", Array)
], UpdatePostDto.prototype, "imageUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of video URLs',
        type: [String],
        required: false,
    }),
    __metadata("design:type", Array)
], UpdatePostDto.prototype, "videoUrls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Scheduled date and time for the post',
        required: false,
    }),
    __metadata("design:type", Date)
], UpdatePostDto.prototype, "scheduledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the post',
        enum: post_status_enum_1.PostStatus,
        required: false,
    }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "status", void 0);
//# sourceMappingURL=update-facebook-post.dto.js.map