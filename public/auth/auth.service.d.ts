import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/enums/user-role.enum';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    signup(username: string, password: string, role: UserRole): Promise<{
        access_token: string;
    }>;
}
