import { Module } from '@nestjs/common';
import { RootAccountService } from './root-account.service';
import { RootAccountController } from './root-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entitys/user.entity';
import { RootAccount } from './entitys/root-account.entity';

@Module({
  imports: [
    //CallbackModule,
    TypeOrmModule.forFeature([RootAccount, UserEntity]), // Ensure both entities are imported
  ],
  providers: [RootAccountService],
  exports: [RootAccountService],
  controllers: [RootAccountController],
})
export class RootAccountModule {}
