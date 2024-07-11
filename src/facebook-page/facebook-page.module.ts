import { Module } from '@nestjs/common';
import { FacebookPageService } from './facebook-page.service';
import { FacebookPageController } from './facebook-page.controller';
import { FacebookPage } from './entitys/facebook-page.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entitys/user.entity';
import { FacebookPost } from './entitys/facebook-posts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FacebookPage,
      RootAccount,
      UserEntity,
      FacebookPost,
    ]), // Ensure both entities are imported
  ],
  providers: [FacebookPageService],
  exports: [FacebookPageService],
  controllers: [FacebookPageController],
})
export class FacebookPageModule {}
