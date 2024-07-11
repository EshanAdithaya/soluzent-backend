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
exports.CreateRootAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const social_media_platform_enum_1 = require("../../enums/social-media-platform.enum");
class CreateRootAccountDto {
}
exports.CreateRootAccountDto = CreateRootAccountDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The social media platform for the root account.',
        example: social_media_platform_enum_1.SocialMediaPlatform.FACEBOOK,
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the root account.',
        example: '9876543210',
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the root account.',
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "accountName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The access token for the root account.',
        example: 'EAABsbCS1iHgBA...',
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The refresh token for the root account.',
        example: 'EAABsbCS1iHgBA...',
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'email',
        example: 'kavinda@gmail.com.',
    }),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pages permission or personal',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateRootAccountDto.prototype, "pageLinked", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'email',
        example: 'kavinda@gmail.com.',
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "fbProfileUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The expiration time of the access token in seconds.',
        example: 3600,
    }),
    __metadata("design:type", Number)
], CreateRootAccountDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the user associated with the root account.',
        example: 1,
    }),
    __metadata("design:type", String)
], CreateRootAccountDto.prototype, "userId", void 0);
//# sourceMappingURL=CreateRootAccount.dto.js.map