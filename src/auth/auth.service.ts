import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/enums/user-role.enum';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const { username, password } = loginUserDto;
    const user = await this.validateUser(username, password);
    if (user) {
      const payload = {
        username: user.username,
        sub: user.id,
        role: user.role,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new Error('Invalid credentials');
  }

  async signup(username: string, password: string, role: UserRole) {
    const user = await this.userService.createUser({
      username,
      password,
      role,
    });
    return this.login({ username: user.username, password });
  }
}
