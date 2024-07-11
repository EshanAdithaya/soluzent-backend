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
exports.YoutubeChannel = void 0;
const root_account_entity_1 = require("../../root-account/entitys/root-account.entity");
const typeorm_1 = require("typeorm");
let YoutubeChannel = class YoutubeChannel {
};
exports.YoutubeChannel = YoutubeChannel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], YoutubeChannel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YoutubeChannel.prototype, "channelId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YoutubeChannel.prototype, "channelName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YoutubeChannel.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YoutubeChannel.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], YoutubeChannel.prototype, "expiresIn", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], YoutubeChannel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], YoutubeChannel.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], YoutubeChannel.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => root_account_entity_1.RootAccount, (rootAccount) => rootAccount.youtubeChannels),
    __metadata("design:type", root_account_entity_1.RootAccount)
], YoutubeChannel.prototype, "rootAccount", void 0);
exports.YoutubeChannel = YoutubeChannel = __decorate([
    (0, typeorm_1.Entity)()
], YoutubeChannel);
//# sourceMappingURL=youtube-channel.entity.js.map