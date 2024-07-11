"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookPageModule = void 0;
const common_1 = require("@nestjs/common");
const facebook_page_service_1 = require("./facebook-page.service");
const facebook_page_controller_1 = require("./facebook-page.controller");
const facebook_page_entity_1 = require("./entitys/facebook-page.entity");
const root_account_entity_1 = require("../root-account/entitys/root-account.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitys/user.entity");
const facebook_posts_entity_1 = require("./entitys/facebook-posts.entity");
let FacebookPageModule = class FacebookPageModule {
};
exports.FacebookPageModule = FacebookPageModule;
exports.FacebookPageModule = FacebookPageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                facebook_page_entity_1.FacebookPage,
                root_account_entity_1.RootAccount,
                user_entity_1.UserEntity,
                facebook_posts_entity_1.FacebookPost,
            ]),
        ],
        providers: [facebook_page_service_1.FacebookPageService],
        exports: [facebook_page_service_1.FacebookPageService],
        controllers: [facebook_page_controller_1.FacebookPageController],
    })
], FacebookPageModule);
//# sourceMappingURL=facebook-page.module.js.map