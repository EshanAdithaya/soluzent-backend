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
exports.RootAccount = void 0;
const facebook_page_entity_1 = require("../../facebook-page/entitys/facebook-page.entity");
const facebook_posts_entity_1 = require("../../facebook-page/entitys/facebook-posts.entity");
const user_entity_1 = require("../../user/entitys/user.entity");
const youtube_channel_entity_1 = require("../../youtube-channel/entitys/youtube-channel.entity");
const typeorm_1 = require("typeorm");
let RootAccount = class RootAccount {
};
exports.RootAccount = RootAccount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RootAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], RootAccount.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "accountName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "fbProfileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], RootAccount.prototype, "expiresIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RootAccount.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], RootAccount.prototype, "pageLinked", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RootAccount.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RootAccount.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], RootAccount.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => facebook_posts_entity_1.FacebookPost, (post) => post.rootAccount),
    __metadata("design:type", Array)
], RootAccount.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.rootAccounts, { nullable: true }),
    __metadata("design:type", user_entity_1.UserEntity)
], RootAccount.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => youtube_channel_entity_1.YoutubeChannel, (youtubeChannel) => youtubeChannel.rootAccount, { nullable: true }),
    __metadata("design:type", Array)
], RootAccount.prototype, "youtubeChannels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => facebook_page_entity_1.FacebookPage, (page) => page.rootAccount, { nullable: true }),
    __metadata("design:type", Array)
], RootAccount.prototype, "pages", void 0);
exports.RootAccount = RootAccount = __decorate([
    (0, typeorm_1.Entity)()
], RootAccount);
//# sourceMappingURL=root-account.entity.js.map