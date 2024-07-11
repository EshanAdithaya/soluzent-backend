import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entitys/user.entity';
import { Repository } from 'typeorm';
import { CreateRootAccountDto } from './dto/CreateRootAccount.dto';
import { UpdateRootAccountDto } from './dto/UpdateRootAccount.dto';
import { RootAccount } from './entitys/root-account.entity';

@Injectable()
export class RootAccountService {
  constructor(
    @InjectRepository(RootAccount)
    private readonly rootAccountRepository: Repository<RootAccount>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createRootAccountDto: CreateRootAccountDto) {
    const { userId, ...accountData } = createRootAccountDto;
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { accountId: createRootAccountDto.accountId },
    });
    if (rootAccount) {
      rootAccount.accessToken = createRootAccountDto.accessToken;
      this.rootAccountRepository.save(rootAccount);
      return rootAccount;
      // return {
      //   status: true,
      //   message: rootAccount.platform + 'account Updated',
      // };
    } else {
      const newAccount = this.rootAccountRepository.create({
        ...accountData,
        user,
      });
      return this.rootAccountRepository.save(newAccount);
    }
  }
  async findOne(id: string): Promise<RootAccount> {
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { id: id },
    });
    if (!rootAccount) {
      throw new NotFoundException(`Root account with ID '${id}' not found`);
    }
    return rootAccount;
  }
  async delete(id: string): Promise<void> {
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { id: id },
    });
    if (!rootAccount) {
      throw new NotFoundException(`Root account with ID '${id}' not found`);
    }
    await this.rootAccountRepository.softDelete(id);
  }

  async findAll(userId: string): Promise<RootAccount[]> {
    return await this.rootAccountRepository.find({
      where: { user: { id: userId } },
    });
  }

  async update(
    id: string,
    updateRootAccountDto: UpdateRootAccountDto,
  ): Promise<RootAccount> {
    const { userId, ...updateData } = updateRootAccountDto;
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { id: id },
    });
    if (!rootAccount) {
      throw new NotFoundException(`Root account with ID '${id}' not found`);
    }
    if (userId) {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User with ID '${userId}' not found`);
      }
      rootAccount.user = user;
    }
    Object.assign(rootAccount, updateData);
    return await this.rootAccountRepository.save(rootAccount);
  }
}
