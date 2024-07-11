"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeChannelModule = void 0;
const common_1 = require("@nestjs/common");
const youtube_channel_service_1 = require("./youtube-channel.service");
const youtube_channel_controller_1 = require("./youtube-channel.controller");
let YoutubeChannelModule = class YoutubeChannelModule {
};
exports.YoutubeChannelModule = YoutubeChannelModule;
exports.YoutubeChannelModule = YoutubeChannelModule = __decorate([
    (0, common_1.Module)({
        providers: [youtube_channel_service_1.YoutubeChannelService],
        controllers: [youtube_channel_controller_1.YoutubeChannelController]
    })
], YoutubeChannelModule);
//# sourceMappingURL=youtube-channel.module.js.map