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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const oauth_callback_dto_1 = require("./dto/oauth-callback.dto");
const callback_service_1 = require("./callback.service");
const auth_guard_1 = require("../auth.guard");
let CallbackController = class CallbackController {
    constructor(authService) {
        this.authService = authService;
    }
    async handleOAuthCallback(provider, req, oAuthCallbackDto) {
        return this.authService.handleOAuthCallback(provider, req.user.id, oAuthCallbackDto.pageLinked, oAuthCallbackDto);
    }
};
exports.CallbackController = CallbackController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':provider/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Handle OAuth callback' }),
    (0, swagger_1.ApiParam)({
        name: 'provider',
        description: 'OAuth provider (e.g., facebook, instagram, tiktok, youtube)',
    }),
    (0, swagger_1.ApiBody)({ type: oauth_callback_dto_1.OAuthCallbackDto }),
    __param(0, (0, common_1.Param)('provider')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, oauth_callback_dto_1.OAuthCallbackDto]),
    __metadata("design:returntype", Promise)
], CallbackController.prototype, "handleOAuthCallback", null);
exports.CallbackController = CallbackController = __decorate([
    (0, swagger_1.ApiTags)('Call backs'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('callback'),
    __metadata("design:paramtypes", [callback_service_1.CallbackService])
], CallbackController);
//# sourceMappingURL=callback.controller.js.map