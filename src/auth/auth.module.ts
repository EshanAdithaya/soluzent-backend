import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';
import { JwtStrategy } from 'src/jwt.strategy';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,

    // forwardRef(() => UserModule),
  ],
  providers: [JwtStrategy, UserService, AuthService],
  exports: [AuthModule],
  controllers: [AuthController],
})
export class AuthModule {}
