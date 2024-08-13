import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
  ApiTags,
  ApiResponse,
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
    console.log(req.user.id);
    return this.authService.handleOAuthCallback(
      provider,
      req.user.userId,
      oAuthCallbackDto.pageLinked,
      oAuthCallbackDto,
    );
  }
  @UseGuards(JwtAuthGuard)
  @Get('resync-facebook-pages/:rootAccountId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Refresh and update Facebook pages for a root account',
  })
  @ApiParam({
    name: 'rootAccountId',
    description: 'ID of the root account to refresh pages for',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Pages updated successfully',
    schema: {
      example: {
        status: true,
        message: 'Pages updated successfully!',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Error fetching and updating pages',
    schema: {
      example: {
        status: false,
        message: 'Error fetching and updating pages',
        error: 'Detailed error message here',
      },
    },
  })
  public async refreshPages(
    @Param('rootAccountId') rootAccountId: string,
    @Req() req: any,
  ): Promise<any> {
    // console.log(req.user.);
    return this.authService.refreshPages(rootAccountId, req.user.userId);
  }
}
