import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFacebookPageDto {
  @ApiPropertyOptional({
    description: 'The Facebook Page ID.',
    example: '1234567890',
    nullable: true,
  })
  pageId?: string;

  @ApiPropertyOptional({
    description: 'The name of the Facebook page.',
    example: 'Updated Page Name',
    nullable: true,
  })
  pageName?: string;

  @ApiPropertyOptional({
    description: 'The access token for the Facebook page.',
    example: 'EAABsbCS1iHgBA...',
    nullable: true,
  })
  accessToken?: string;

  @ApiPropertyOptional({
    description: 'The refresh token for the Facebook page.',
    example: 'EAABsbCS1iHgBA...',
    nullable: true,
  })
  refreshToken?: string;

  @ApiPropertyOptional({
    description: 'Indicates if the Facebook page is active.',
    example: true,
    nullable: true,
  })
  isActive?: boolean;

  @ApiPropertyOptional({
    description: 'The expiration time of the access token in seconds.',
    example: 3600,
    nullable: true,
  })
  expiresIn?: number;
  @ApiPropertyOptional({
    description: 'The expiration time of the access token in seconds.',
    example: 3600,
    nullable: true,
  })
  rootAccountId?: string;
}
