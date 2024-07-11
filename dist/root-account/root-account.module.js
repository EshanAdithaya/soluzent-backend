"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootAccountModule = void 0;
const common_1 = require("@nestjs/common");
const root_account_service_1 = require("./root-account.service");
const root_account_controller_1 = require("./root-account.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitys/user.entity");
const root_account_entity_1 = require("./entitys/root-account.entity");
let RootAccountModule = class RootAccountModule {
};
exports.RootAccountModule = RootAccountModule;
exports.RootAccountModule = RootAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([root_account_entity_1.RootAccount, user_entity_1.UserEntity]),
        ],
        providers: [root_account_service_1.RootAccountService],
        exports: [root_account_service_1.RootAccountService],
        controllers: [root_account_controller_1.RootAccountController],
    })
], RootAccountModule);
//# sourceMappingURL=root-account.module.js.map