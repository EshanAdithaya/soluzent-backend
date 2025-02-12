import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'The unique username of the user',
    example: 'johndoe',
  })
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'securepassword123',
  })
  password: string;

  @ApiProperty({
    description: 'The role of the user',
    example: UserRole.USER,
    enum: UserRole,
  })
  role: UserRole;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'johndoe@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1234567890',
    required: false,
  })
  phoneNumber?: string;

  @ApiProperty({
    description: 'The profile picture URL of the user',
    example: 'https://example.com/profile.jpg',
    required: false,
  })
  profilePictureUrl?: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'The date of birth of the user',
    example: '1990-01-01',
    required: false,
  })
  dateOfBirth?: Date;

  @ApiProperty({
    description: 'The address of the user',
    example: '123 Main St, Anytown, USA',
    required: false,
  })
  address?: string;

  @ApiProperty({
    description: 'A short biography of the user',
    example: 'A passionate developer with a love for coding.',
    required: false,
  })
  bio?: string;
}
