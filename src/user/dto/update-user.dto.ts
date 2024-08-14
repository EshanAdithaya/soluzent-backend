import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserRole } from 'src/enums/user-role.enum';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  //   @ApiProperty({
  //     description: 'The unique username of the user',
  //     example: 'johndoe',
  //     required: false,
  //   })
  //   username?: string;

  @ApiProperty({
    description: 'The role of the user',
    example: UserRole.ADMIN,
    enum: UserRole,
    required: false,
  })
  role?: UserRole;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'newemail@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+0987654321',
    required: false,
  })
  phoneNumber?: string;

  @ApiProperty({
    description: 'The profile picture URL of the user',
    example: 'https://example.com/newprofile.jpg',
    required: false,
  })
  profilePictureUrl?: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'Johnny',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe Jr.',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'The date of birth of the user',
    example: '1991-01-01',
    required: false,
  })
  dateOfBirth?: Date;

  @ApiProperty({
    description: 'The address of the user',
    example: '456 Elm St, Anytown, USA',
    required: false,
  })
  address?: string;

  @ApiProperty({
    description: 'A short biography of the user',
    example: 'A dedicated developer with extensive experience.',
    required: false,
  })
  bio?: string;
}
