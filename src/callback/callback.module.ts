import { Module } from '@nestjs/common';
import { CallbackService } from './callback.service';
import { CallbackController } from './callback.controller';
import { RootAccountModule } from 'src/root-account/root-account.module';
import { FacebookPageModule } from 'src/facebook-page/facebook-page.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { UserModule } from 'src/user/user.module';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';

@Module({
  imports: [
    RootAccountModule,
    FacebookPageModule,
    UserModule,
    TypeOrmModule.forFeature([FacebookPage, RootAccount]), // Ensure both entities are imported
  ],
  // imports: [],
  providers: [CallbackService],
  controllers: [CallbackController],
})
export class CallbackModule {}
