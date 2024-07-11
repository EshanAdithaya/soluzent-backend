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
exports.UpdateFacebookPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateFacebookPageDto {
}
exports.UpdateFacebookPageDto = UpdateFacebookPageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The Facebook Page ID.',
        example: '1234567890',
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateFacebookPageDto.prototype, "pageId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The name of the Facebook page.',
        example: 'Updated Page Name',
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateFacebookPageDto.prototype, "pageName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The access token for the Facebook page.',
        example: 'EAABsbCS1iHgBA...',
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateFacebookPageDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The refresh token for the Facebook page.',
        example: 'EAABsbCS1iHgBA...',
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateFacebookPageDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Indicates if the Facebook page is active.',
        example: true,
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], UpdateFacebookPageDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The expiration time of the access token in seconds.',
        example: 3600,
        nullable: true,
    }),
    __metadata("design:type", Number)
], UpdateFacebookPageDto.prototype, "expiresIn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The expiration time of the access token in seconds.',
        example: 3600,
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateFacebookPageDto.prototype, "rootAccountId", void 0);
//# sourceMappingURL=UpdateFacebookPage.dto.js.map