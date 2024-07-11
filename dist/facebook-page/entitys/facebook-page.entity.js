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
exports.FacebookPage = void 0;
const root_account_entity_1 = require("../../root-account/entitys/root-account.entity");
const user_entity_1 = require("../../user/entitys/user.entity");
const typeorm_1 = require("typeorm");
const facebook_posts_entity_1 = require("./facebook-posts.entity");
let FacebookPage = class FacebookPage {
};
exports.FacebookPage = FacebookPage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FacebookPage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacebookPage.prototype, "pageId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FacebookPage.prototype, "pageName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FacebookPage.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], FacebookPage.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], FacebookPage.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], FacebookPage.prototype, "expiresIn", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FacebookPage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], FacebookPage.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], FacebookPage.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => facebook_posts_entity_1.FacebookPost, (post) => post.page),
    __metadata("design:type", Array)
], FacebookPage.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => root_account_entity_1.RootAccount, (rootAccount) => rootAccount.pages),
    __metadata("design:type", root_account_entity_1.RootAccount)
], FacebookPage.prototype, "rootAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.facebookPages),
    __metadata("design:type", user_entity_1.UserEntity)
], FacebookPage.prototype, "user", void 0);
exports.FacebookPage = FacebookPage = __decorate([
    (0, typeorm_1.Entity)()
], FacebookPage);
//# sourceMappingURL=facebook-page.entity.js.map