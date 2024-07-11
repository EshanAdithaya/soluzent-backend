import { UserRole } from 'src/enums/user-role.enum';
export declare class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly role: UserRole;
}
