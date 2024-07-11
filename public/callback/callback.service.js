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
exports.CallbackService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const root_account_service_1 = require("../root-account/root-account.service");
const social_media_platform_enum_1 = require("../enums/social-media-platform.enum");
const CreateRootAccount_dto_1 = require("../root-account/dto/CreateRootAccount.dto");
const facebook_page_service_1 = require("../facebook-page/facebook-page.service");
const typeorm_1 = require("@nestjs/typeorm");
const facebook_page_entity_1 = require("../facebook-page/entitys/facebook-page.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entitys/user.entity");
const root_account_entity_1 = require("../root-account/entitys/root-account.entity");
let CallbackService = class CallbackService {
    constructor(rootAccountService, facebookPageService, facebookPageEntity, userRepository, rootAccount) {
        this.rootAccountService = rootAccountService;
        this.facebookPageService = facebookPageService;
        this.facebookPageEntity = facebookPageEntity;
        this.userRepository = userRepository;
        this.rootAccount = rootAccount;
        this.getBasicUserData = async (accessToken, userId, pageLinked) => {
            const userUrl = `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`;
            try {
                const response = await axios_1.default.get(userUrl);
                try {
                    const user = await this.userRepository.findOne({
                        where: { id: userId },
                    });
                    if (!user) {
                        throw new common_1.NotFoundException(`User with id ${userId} not found`);
                    }
                    const createDto = new CreateRootAccount_dto_1.CreateRootAccountDto();
                    createDto.platform = social_media_platform_enum_1.SocialMediaPlatform.FACEBOOK;
                    createDto.accountId = response.data.id;
                    createDto.accountName = response.data.name;
                    createDto.accessToken = accessToken;
                    createDto.refreshToken = null;
                    createDto.expiresIn = 4320000;
                    createDto.userId = userId;
                    createDto.email = response.data.email;
                    const RootAccount = await this.rootAccountService.create(createDto);
                    if (pageLinked && RootAccount) {
                        const pagesUrl = `https://graph.facebook.com/me/accounts?fields=id,name,access_token&access_token=${accessToken}`;
                        try {
                            const user = await this.userRepository.findOne({
                                where: { id: userId },
                            });
                            if (!user) {
                                throw new common_1.NotFoundException(`User Account with ID ${user.id} not found`);
                            }
                            if (!RootAccount) {
                                throw new common_1.NotFoundException(`Root Account with ID ${user.id} not found`);
                            }
                            const response = await axios_1.default.get(pagesUrl);
                            const facebookPage = new facebook_page_entity_1.FacebookPage();
                            facebookPage.accessToken = response.data.data[0].access_token;
                            facebookPage.pageId = response.data.data[0].id;
                            facebookPage.pageName = response.data.data[0].name;
                            facebookPage.refreshToken = 'refreshToken';
                            facebookPage.expiresIn = 4320000;
                            facebookPage.isActive = true;
                            facebookPage.rootAccount = RootAccount;
                            facebookPage.user = user;
                            const facebookPageData = await this.facebookPageEntity.findOne({
                                where: { pageId: facebookPage.pageId },
                            });
                            if (facebookPageData) {
                                facebookPageData.accessToken = facebookPage.accessToken;
                                return {
                                    status: true,
                                };
                            }
                            else {
                                return {
                                    status: true,
                                };
                            }
                        }
                        catch (error) {
                            return {
                                status: false,
                                error: error,
                            };
                        }
                    }
                    return {
                        status: true,
                        message: 'Root account created Successfullt',
                    };
                    console.log('Root account created successfully!');
                }
                catch (error) {
                    return {
                        status: false,
                        message: 'Root account creation failed',
                        error: error,
                    };
                }
            }
            catch (error) {
                console.error('Error fetching basic user data:', error);
                throw new Error('Error fetching basic user data');
            }
        };
    }
    async handleOAuthCallback(provider, userId, pageLinked, oAuthCallbackDto) {
        console.log('called');
        console.log(provider);
        console.log(oAuthCallbackDto);
        const { code } = oAuthCallbackDto;
        let tokenUrl = '';
        let clientId = '';
        let clientSecret = '';
        const redirectUri = 'http://localhost:3001/callback';
        switch (provider) {
            case 'facebook':
                clientId = '491077089981477';
                clientSecret = 'fb1d6b89108a72668e7cd8643110cc9e';
                tokenUrl = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;
                break;
            case 'instagram':
                clientId = '491077089981477';
                clientSecret = 'fb1d6b89108a72668e7cd8643110cc9e';
                tokenUrl = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;
                break;
            case 'tiktok':
                clientId = 'aw8mqqcpn6ayrkiy';
                clientSecret = 'OVI5Wplc9gEu4E9181OK2Vu1pXpUhwz9';
                tokenUrl = `https://open-api.tiktok.com/oauth/access_token`;
                break;
            case 'youtube':
                clientId = 'YOUR_YOUTUBE_CLIENT_ID';
                clientSecret = 'YOUR_YOUTUBE_CLIENT_SECRET';
                tokenUrl = `https://oauth2.googleapis.com/token`;
                break;
            default:
                throw new common_1.HttpException('Unsupported provider', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const response = await axios_1.default.post(tokenUrl, {
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            });
            switch (provider) {
                case 'facebook':
                    return this.getBasicUserData(response.data.access_token, userId, pageLinked);
                case 'instagram':
                    console.log();
                case 'tiktok':
                    console.log();
                    break;
                case 'youtube':
                    console.log();
                    break;
                default:
                    throw new common_1.HttpException('Unsupported provider', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data, error.response.status);
        }
    }
};
exports.CallbackService = CallbackService;
exports.CallbackService = CallbackService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(facebook_page_entity_1.FacebookPage)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(root_account_entity_1.RootAccount)),
    __metadata("design:paramtypes", [root_account_service_1.RootAccountService,
        facebook_page_service_1.FacebookPageService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CallbackService);
//# sourceMappingURL=callback.service.js.map