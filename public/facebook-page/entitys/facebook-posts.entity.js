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
exports.FacebookPost = void 0;
const user_entity_1 = require("../../user/entitys/user.entity");
const root_account_entity_1 = require("../../root-account/entitys/root-account.entity");
const facebook_page_entity_1 = require("./facebook-page.entity");
const typeorm_1 = require("typeorm");
let FacebookPost = class FacebookPost {
};
exports.FacebookPost = FacebookPost;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FacebookPost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacebookPost.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacebookPost.prototype, "facebookPostId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], FacebookPost.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], FacebookPost.prototype, "videoUrls", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], FacebookPost.prototype, "scheduledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FacebookPost.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FacebookPost.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FacebookPost.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], FacebookPost.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.posts),
    __metadata("design:type", user_entity_1.UserEntity)
], FacebookPost.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => root_account_entity_1.RootAccount, (rootAccount) => rootAccount.posts),
    __metadata("design:type", root_account_entity_1.RootAccount)
], FacebookPost.prototype, "rootAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => facebook_page_entity_1.FacebookPage, (page) => page.posts),
    __metadata("design:type", facebook_page_entity_1.FacebookPage)
], FacebookPost.prototype, "page", void 0);
exports.FacebookPost = FacebookPost = __decorate([
    (0, typeorm_1.Entity)()
], FacebookPost);
//# sourceMappingURL=facebook-posts.entity.js.map