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
exports.CreateFacebookPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateFacebookPageDto {
}
exports.CreateFacebookPageDto = CreateFacebookPageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the root account associated with the Facebook page.',
        example: 'c5e8f00e-7e0d-4cf2-b91e-1e585fba2c72',
    }),
    __metadata("design:type", String)
], CreateFacebookPageDto.prototype, "rootAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The Facebook Page ID.',
        example: '1234567890',
    }),
    __metadata("design:type", String)
], CreateFacebookPageDto.prototype, "pageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the Facebook page.',
        example: 'My Facebook Page',
    }),
    __metadata("design:type", String)
], CreateFacebookPageDto.prototype, "pageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The access token for the Facebook page.',
        example: 'EAABsbCS1iHgBA...',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateFacebookPageDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The refresh token for the Facebook page.',
        example: 'EAABsbCS1iHgBA...',
        nullable: true,
    }),
    __metadata("design:type", String)
], CreateFacebookPageDto.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the Facebook page is active.',
        example: true,
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], CreateFacebookPageDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The expiration time of the access token in seconds.',
        example: 3600,
        nullable: true,
    }),
    __metadata("design:type", Number)
], CreateFacebookPageDto.prototype, "expiresIn", void 0);
//# sourceMappingURL=CreateFacebookPage.dto.js.map