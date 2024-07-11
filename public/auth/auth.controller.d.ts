import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
