// src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsEnum } from 'class-validator';
import { UserRole } from 'src/enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  readonly role: UserRole;
}
