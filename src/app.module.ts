import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entitys/user.entity';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';

import { JwtService } from '@nestjs/jwt';
import { CallbackModule } from './callback/callback.module';
import { RootAccountModule } from './root-account/root-account.module';
import { YoutubeChannelModule } from './youtube-channel/youtube-channel.module';
import { FacebookPageModule } from './facebook-page/facebook-page.module';
import { FacebookPage } from './facebook-page/entitys/facebook-page.entity';
import { RootAccount } from './root-account/entitys/root-account.entity';
import { YoutubeChannel } from './youtube-channel/entitys/youtube-channel.entity';
import { FacebookPost } from './facebook-page/entitys/facebook-posts.entity';
import { OpenaiFacebookModule } from './openai-facebook/openai-facebook.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 8889,
    //   username: 'root',
    //   password: 'root',
    //   database: 'soluzent-marketing-v2',
    //   entities: [UserEntity, RootAccount, YoutubeChannel, FacebookPage],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '145.14.153.51',
      // port: 8889,
      username: 'u304157271_root',
      password: 'JzHN/*L0r|S',
      database: 'u304157271_social_tool_v1',
      entities: [
        UserEntity,
        RootAccount,
        YoutubeChannel,
        FacebookPage,
        FacebookPost,
      ],
      synchronize: true,
    }),
    CallbackModule,
    RootAccountModule,
    YoutubeChannelModule,
    FacebookPageModule,
    OpenaiFacebookModule,
  ],
  controllers: [AppController],
  providers: [UserService, AuthService, AppService, JwtService],
})
export class AppModule {}
