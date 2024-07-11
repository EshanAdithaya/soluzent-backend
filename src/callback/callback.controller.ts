import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { OAuthCallbackDto } from './dto/oauth-callback.dto';
import { CallbackService } from './callback.service';
import { JwtAuthGuard } from 'src/auth.guard';

@ApiTags('Call backs')
@ApiBearerAuth()
@Controller('callback')
export class CallbackController {
  constructor(private readonly authService: CallbackService) {}
  @UseGuards(JwtAuthGuard)
  @Post(':provider/callback')
  @ApiOperation({ summary: 'Handle OAuth callback' })
  @ApiParam({
    name: 'provider',
    description: 'OAuth provider (e.g., facebook, instagram, tiktok, youtube)',
  })
  @ApiBody({ type: OAuthCallbackDto })
  async handleOAuthCallback(
    @Param('provider') provider: string,
    // @Param('pageLinked') pageLinked: boolean,
    @Req() req: any, // Req type for accessing request
    @Body() oAuthCallbackDto: OAuthCallbackDto,
  ) {
    return this.authService.handleOAuthCallback(
      provider,
      req.user.id,
      oAuthCallbackDto.pageLinked,
      oAuthCallbackDto,
    );
  }
}
