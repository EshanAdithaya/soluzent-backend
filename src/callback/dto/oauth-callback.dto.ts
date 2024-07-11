// src/auth/dto/oauth-callback.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class OAuthCallbackDto {
  @ApiProperty({
    description: 'The authorization code received from the OAuth provider',
  })
  code: string;
  @ApiProperty({
    description: 'page linked status',
  })
  pageLinked: boolean;
}
