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
exports.RootAccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitys/user.entity");
const typeorm_2 = require("typeorm");
const root_account_entity_1 = require("./entitys/root-account.entity");
let RootAccountService = class RootAccountService {
    constructor(rootAccountRepository, userRepository) {
        this.rootAccountRepository = rootAccountRepository;
        this.userRepository = userRepository;
    }
    async create(createRootAccountDto) {
        const { userId, ...accountData } = createRootAccountDto;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { accountId: createRootAccountDto.accountId },
        });
        if (rootAccount) {
            rootAccount.accessToken = createRootAccountDto.accessToken;
            this.rootAccountRepository.save(rootAccount);
            return rootAccount;
        }
        else {
            const newAccount = this.rootAccountRepository.create({
                ...accountData,
                user,
            });
            return this.rootAccountRepository.save(newAccount);
        }
    }
    async findOne(id) {
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { id: id },
        });
        if (!rootAccount) {
            throw new common_1.NotFoundException(`Root account with ID '${id}' not found`);
        }
        return rootAccount;
    }
    async delete(id) {
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { id: id },
        });
        if (!rootAccount) {
            throw new common_1.NotFoundException(`Root account with ID '${id}' not found`);
        }
        await this.rootAccountRepository.softDelete(id);
    }
    async findAll(userId) {
        return await this.rootAccountRepository.find({
            where: { user: { id: userId } },
        });
    }
    async update(id, updateRootAccountDto) {
        const { userId, ...updateData } = updateRootAccountDto;
        const rootAccount = await this.rootAccountRepository.findOne({
            where: { id: id },
        });
        if (!rootAccount) {
            throw new common_1.NotFoundException(`Root account with ID '${id}' not found`);
        }
        if (userId) {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID '${userId}' not found`);
            }
            rootAccount.user = user;
        }
        Object.assign(rootAccount, updateData);
        return await this.rootAccountRepository.save(rootAccount);
    }
};
exports.RootAccountService = RootAccountService;
exports.RootAccountService = RootAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(root_account_entity_1.RootAccount)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RootAccountService);
//# sourceMappingURL=root-account.service.js.map