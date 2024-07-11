import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SocialMediaPlatform } from 'src/enums/social-media-platform.enum';

export class CreateRootAccountDto {
  @ApiProperty({
    description: 'The social media platform for the root account.',
    example: SocialMediaPlatform.FACEBOOK,
  })
  platform: SocialMediaPlatform;

  @ApiProperty({
    description: 'The unique identifier of the root account.',
    example: '9876543210',
  })
  accountId: string;

  @ApiProperty({
    description: 'The name of the root account.',
    example: 'John Doe',
  })
  accountName: string;

  @ApiProperty({
    description: 'The access token for the root account.',
    example: 'EAABsbCS1iHgBA...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'The refresh token for the root account.',
    example: 'EAABsbCS1iHgBA...',
  })
  refreshToken: string;
  @ApiPropertyOptional({
    description: 'email',
    example: 'kavinda@gmail.com.',
  })
  @ApiPropertyOptional({
    description: 'Pages permission or personal',
    example: true,
  })
  pageLinked?: boolean;
  email?: string;
  @ApiPropertyOptional({
    description: 'email',
    example: 'kavinda@gmail.com.',
  })
  fbProfileUrl?: string;

  @ApiProperty({
    description: 'The expiration time of the access token in seconds.',
    example: 3600,
  })
  expiresIn: number;

  @ApiProperty({
    description: 'The ID of the user associated with the root account.',
    example: 1,
  })
  userId: string;
}
