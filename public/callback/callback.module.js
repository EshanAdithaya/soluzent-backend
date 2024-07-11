"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackModule = void 0;
const common_1 = require("@nestjs/common");
const callback_service_1 = require("./callback.service");
const callback_controller_1 = require("./callback.controller");
const root_account_module_1 = require("../root-account/root-account.module");
const facebook_page_module_1 = require("../facebook-page/facebook-page.module");
const typeorm_1 = require("@nestjs/typeorm");
const facebook_page_entity_1 = require("../facebook-page/entitys/facebook-page.entity");
const user_module_1 = require("../user/user.module");
const root_account_entity_1 = require("../root-account/entitys/root-account.entity");
let CallbackModule = class CallbackModule {
};
exports.CallbackModule = CallbackModule;
exports.CallbackModule = CallbackModule = __decorate([
    (0, common_1.Module)({
        imports: [
            root_account_module_1.RootAccountModule,
            facebook_page_module_1.FacebookPageModule,
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([facebook_page_entity_1.FacebookPage, root_account_entity_1.RootAccount]),
        ],
        providers: [callback_service_1.CallbackService],
        controllers: [callback_controller_1.CallbackController],
    })
], CallbackModule);
//# sourceMappingURL=callback.module.js.map