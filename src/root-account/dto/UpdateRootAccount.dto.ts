import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRootAccountDto {
  @ApiPropertyOptional({
    description: 'The social media platform for the root account.',
    example: 'Facebook',
  })
  platform?: string;

  @ApiPropertyOptional({
    description: 'The unique identifier of the root account.',
    example: '9876543210',
  })
  accountId?: string;

  @ApiPropertyOptional({
    description: 'The name of the root account.',
    example: 'John Doe',
  })
  accountName?: string;

  @ApiPropertyOptional({
    description: 'The access token for the root account.',
    example: 'EAABsbCS1iHgBA...',
  })
  accessToken?: string;

  @ApiPropertyOptional({
    description: 'The refresh token for the root account.',
    example: 'EAABsbCS1iHgBA...',
  })
  refreshToken?: string;
  @ApiPropertyOptional({
    description: 'email',
    example: 'kavinda@gmail.com.',
  })
  email?: string;
  @ApiPropertyOptional({
    description: 'Pages permission or personal',
    example: true,
  })
  pageLinked?: boolean;
  @ApiPropertyOptional({
    description: 'email',
    example: 'kavinda@gmail.com.',
  })
  fbProfileUrl?: string;
  @ApiPropertyOptional({
    description: 'The expiration time of the access token in seconds.',
    example: 3600,
  })
  expiresIn?: number;

  @ApiPropertyOptional({
    description: 'The ID of the user associated with the root account.',
    example: 1,
  })
  userId?: string;
}
