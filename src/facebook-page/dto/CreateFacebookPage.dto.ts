import { ApiProperty } from '@nestjs/swagger';

export class CreateFacebookPageDto {
  @ApiProperty({
    description:
      'The ID of the root account associated with the Facebook page.',
    example: 'c5e8f00e-7e0d-4cf2-b91e-1e585fba2c72',
  })
  rootAccountId: string;

  @ApiProperty({
    description: 'The Facebook Page ID.',
    example: '1234567890',
  })
  pageId: string;

  @ApiProperty({
    description: 'The name of the Facebook page.',
    example: 'My Facebook Page',
  })
  pageName: string;

  @ApiProperty({
    description: 'The access token for the Facebook page.',
    example: 'EAABsbCS1iHgBA...',
    nullable: true,
  })
  accessToken?: string;

  @ApiProperty({
    description: 'The refresh token for the Facebook page.',
    example: 'EAABsbCS1iHgBA...',
    nullable: true,
  })
  refreshToken?: string;

  @ApiProperty({
    description: 'Indicates if the Facebook page is active.',
    example: true,
    nullable: true,
  })
  isActive?: boolean;

  @ApiProperty({
    description: 'The expiration time of the access token in seconds.',
    example: 3600,
    nullable: true,
  })
  expiresIn?: number;
}
