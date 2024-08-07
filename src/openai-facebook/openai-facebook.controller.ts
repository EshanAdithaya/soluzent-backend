import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpenaiFacebookService } from './openai-facebook.service';

@Controller('openAI-facebook')
@ApiTags('openAI-facebook')
export class OpenaiFacebookController {
  constructor(private readonly openaiService: OpenaiFacebookService) {}
  @Get('query/:query')
  @ApiOperation({ summary: 'Query analytics data' })
  @ApiParam({
    name: 'query',
    description: 'The analytics query',
    type: 'string',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the analyzed query results',
  })
  async queryAnalytics(@Param('query') query: string) {
    return this.openaiService.runConversation(query);
  }
  @Get('queryPost/:query')
  @ApiOperation({ summary: 'Query analytics data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the analyzed query results',
  })
  async queryPostAnalytics(
    @Query('query') query: string,
    @Query('pageId') pageId: string,
    @Query('postId') postId: string,
  ) {
    return this.openaiService.getPostAnalyticsQuery(query, pageId, postId);
  }

  @Get('queryPage/:query')
  @ApiOperation({ summary: 'Query analytics data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the analyzed query results',
  })
  async queryPageAnalytics(
    @Query('query') query: string,
    @Query('pageId') pageId: string,
  ) {
    return this.openaiService.getPageAnalyticsQuery(query, pageId);
  }
}
