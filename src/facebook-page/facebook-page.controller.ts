import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateFacebookPageDto } from './dto/CreateFacebookPage.dto';
import { UpdateFacebookPageDto } from './dto/UpdateFacebookPage.dto';
import { FacebookPage } from './entitys/facebook-page.entity';
import { FacebookPageService } from './facebook-page.service';
import { JwtAuthGuard } from 'src/auth.guard';
import { CreatePostDto } from './dto/create-facebook-post.dto';
import { FacebookPost } from './entitys/facebook-posts.entity';
import { UpdatePostDto } from './dto/update-facebook-post.dto';
import { GetPostsFilterDto } from './dto/filter-facebook-posts.dto';

@ApiTags('Facebook Pages')
@ApiBearerAuth()
@Controller('facebook-pages')
export class FacebookPageController {
  constructor(private readonly facebookPageService: FacebookPageService) {}
  @Get('/post-analytics')
  @ApiQuery({
    name: 'pageId',
    type: String,
    description: 'The ID of the Facebook page',
    required: true,
  })
  @ApiQuery({
    name: 'postId',
    type: String,
    description: 'The ID of the Facebook post',
    required: true,
  })
  @ApiQuery({
    name: 'metric',
    type: String,
    description:
      'The metric to query. Valid metrics are: post_engaged_users, post_negative_feedback, post_negative_feedback_unique, post_negative_feedback_by_type, post_negative_feedback_by_type_unique, post_engaged_fan, post_clicks, post_clicks_unique, post_clicks_by_type, post_clicks_by_type_unique, post_impressions, post_impressions_unique, post_impressions_paid, post_impressions_paid_unique, post_impressions_fan, post_impressions_fan_unique, post_impressions_organic, post_impressions_organic_unique, post_impressions_viral, post_impressions_viral_unique, post_impressions_nonviral, post_impressions_nonviral_unique, post_impressions_by_story_type, post_impressions_by_story_type_unique, post_impressions_by_paid_non_paid.',
    required: true,
    enum: [
      'post_engaged_users',
      'post_negative_feedback',
      'post_negative_feedback_unique',
      'post_negative_feedback_by_type',
      'post_negative_feedback_by_type_unique',
      'post_engaged_fan',
      'post_clicks',
      'post_clicks_unique',
      'post_clicks_by_type',
      'post_clicks_by_type_unique',
      'post_impressions',
      'post_impressions_unique',
      'post_impressions_paid',
      'post_impressions_paid_unique',
      'post_impressions_fan',
      'post_impressions_fan_unique',
      'post_impressions_organic',
      'post_impressions_organic_unique',
      'post_impressions_viral',
      'post_impressions_viral_unique',
      'post_impressions_nonviral',
      'post_impressions_nonviral_unique',
      'post_impressions_by_story_type',
      'post_impressions_by_story_type_unique',
      'post_impressions_by_paid_non_paid',
      'post_reactions_like_total',
      'post_reactions_love_total',
      'post_reactions_wow_total',
      'post_reactions_haha_total',
      'post_reactions_sorry_total',
      'post_reactions_anger_total',
      'post_reactions_by_type_total',
    ],
  })
  @ApiQuery({
    name: 'since',
    type: String,
    description: 'Start date for the analytics data (format: YYYY-MM-DD)',
    required: true,
  })
  @ApiQuery({
    name: 'until',
    type: String,
    description: 'End date for the analytics data (format: YYYY-MM-DD)',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved post engagement analytics',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  async getPostAnalytic(
    @Query('postId') postId: string,
    @Query('pageId') pageId: string,
    @Query('metric') metric: string,
    @Query('since') since: string,
    @Query('until') until: string,
  ) {
    try {
      const result = await this.facebookPageService.getPostAnalytics(
        postId,
        pageId,
        metric,
        since,
        until,
      );
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('/page-analytics')
  @ApiQuery({
    name: 'pageId',
    type: String,
    description: 'The ID of the Facebook page',
    required: true,
  })
  @ApiQuery({
    name: 'metric',
    type: String,
    description:
      'The metric to query. Valid metrics are: page_post_engagements, page_consumptions_unique, page_consumptions_by_consumption_type, page_consumptions_by_consumption_type_unique, page_places_checkin_total, page_places_checkin_total_unique, page_negative_feedback, page_negative_feedback_unique, page_negative_feedback_by_type, page_negative_feedback_by_type_unique, page_fans_online, page_fans_online_per_day, page_fan_adds_by_paid_non_paid_unique, page_lifetime_engaged_followers_unique, page_daily_follows, page_daily_follows_unique, page_daily_unfollows_unique, page_follows, page_impressions, page_impressions_unique, page_impressions_paid, page_impressions_paid_unique, page_impressions_organic_v2, page_impressions_organic_unique_v2, page_impressions_viral, page_impressions_viral_unique, page_impressions_nonviral, page_impressions_nonviral_unique, page_impressions_by_story_type, page_impressions_by_story_type_unique, page_impressions_by_city_unique, page_impressions_by_country_unique, page_impressions_by_locale_unique, page_impressions_by_age_gender_unique, page_impressions_viral_frequency_distribution.',
    required: true,
    enum: [
      'page_post_engagements',
      'page_consumptions_unique',
      'page_consumptions_by_consumption_type',
      'page_consumptions_by_consumption_type_unique',
      'page_places_checkin_total',
      'page_places_checkin_total_unique',
      'page_negative_feedback',
      'page_negative_feedback_unique',
      'page_negative_feedback_by_type',
      'page_negative_feedback_by_type_unique',
      'page_fans_online',
      'page_fans_online_per_day',
      'page_fan_adds_by_paid_non_paid_unique',
      'page_lifetime_engaged_followers_unique',
      'page_daily_follows',
      'page_daily_follows_unique',
      'page_daily_unfollows_unique',
      'page_follows',
      'page_impressions',
      'page_impressions_unique',
      'page_impressions_paid',
      'page_impressions_paid_unique',
      'page_impressions_organic_v2',
      'page_impressions_organic_unique_v2',
      'page_impressions_viral',
      'page_impressions_viral_unique',
      'page_impressions_nonviral',
      'page_impressions_nonviral_unique',
      'page_impressions_by_story_type',
      'page_impressions_by_story_type_unique',
      'page_impressions_by_city_unique',
      'page_impressions_by_country_unique',
      'page_impressions_by_locale_unique',
      'page_impressions_by_age_gender_unique',
      'page_impressions_viral_frequency_distribution',
    ],
  })
  @ApiQuery({
    name: 'since',
    type: String,
    description: 'Start date for the analytics data (format: YYYY-MM-DD)',
    required: true,
  })
  @ApiQuery({
    name: 'until',
    type: String,
    description: 'End date for the analytics data (format: YYYY-MM-DD)',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved post engagement analytics',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  async getPageEngagement(
    // @Query('postId') postId: string,
    @Query('pageId') pageId: string,
    @Query('metric') metric: string,
    @Query('since') since: string,
    @Query('until') until: string,
  ) {
    try {
      const result = await this.facebookPageService.getPageAnalytics(
        // postId,
        pageId,
        metric,
        since,
        until,
      );
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('/metrice')
  @ApiOperation({ summary: 'Get metice type' })
  @ApiQuery({
    name: 'metrics',
    type: String,
    description: 'Comma-separated list of metrics to fetch',
    example: 'page_impressions,page_engaged_users',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched metrics',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  async getMetrics(@Query('metrics') metrics: string): Promise<any> {
    const metricsArray = metrics.split(','); // Assuming metrics are passed as a comma-separated string
    const combinedMetrics =
      await this.facebookPageService.classifyMetrics(metricsArray);
    return combinedMetrics;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Facebook Page' })
  @ApiResponse({
    status: 201,
    description: 'The Facebook Page has been successfully created.',
    type: FacebookPage,
  })
  @ApiBadRequestResponse({ description: 'Invalid data provided.' })
  async create(
    @Body() createDto: CreateFacebookPageDto,
  ): Promise<FacebookPage> {
    return this.facebookPageService.create(createDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all Facebook Pages' })
  @ApiResponse({
    status: 200,
    description: 'Returns all Facebook Pages.',
    type: [FacebookPage],
  })
  async findAll(@Req() req: any): Promise<FacebookPage[]> {
    // console.log(req.user);
    return this.facebookPageService.findAll(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Facebook Page by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the Facebook Page.',
    type: FacebookPage,
  })
  @ApiNotFoundResponse({ description: 'Facebook Page not found.' })
  async findOne(@Param('id') id: string): Promise<FacebookPage> {
    return this.facebookPageService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a Facebook Page by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated Facebook Page.',
    type: FacebookPage,
  })
  @ApiNotFoundResponse({ description: 'Facebook Page not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateFacebookPageDto,
  ): Promise<FacebookPage> {
    return this.facebookPageService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Facebook Page by ID' })
  @ApiResponse({
    status: 200,
    description: 'The Facebook Page has been successfully deleted.',
  })
  @ApiNotFoundResponse({ description: 'Facebook Page not found.' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.facebookPageService.delete(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/create-post')
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
    type: FacebookPost,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async createFacebookPost(
    @Body() createPostDto: CreatePostDto,
    @Req() req: any,
  ) {
    return this.facebookPageService.createFacebookPost(
      createPostDto,
      req.user.userId,
    );
  }
  @Patch('/update-post/:id')
  @ApiOperation({ summary: 'Update a Facebook post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated.',
    type: FacebookPost,
  })
  async updateFacebookPost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.facebookPageService.updateFacebookPost(id, updatePostDto);
  }
  @UseGuards(JwtAuthGuard)
  @Post('/get-posts-filter')
  @ApiOperation({ summary: 'Get posts based on filters' })
  @ApiResponse({
    status: 200,
    description: 'Posts retrieved successfully',
    type: [FacebookPost],
  })
  async getPosts(@Body() filterDto: GetPostsFilterDto, @Req() req: any) {
    const { rootAccountId, pageId } = filterDto;

    if (!rootAccountId && !req.user.userId && !pageId) {
      throw new BadRequestException('At least one filter must be provided');
    }

    return this.facebookPageService.findFacebookPosts(
      filterDto,
      req.user.userId,
    );
  }
  @Delete('/delete-post/:id')
  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({ name: 'id', type: String, description: 'Post ID to delete' })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  async deletePost(@Param('id') id: string) {
    try {
      return await this.facebookPageService.deletePost(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error; // Let other unexpected errors propagate
    }
  }
  @UseGuards(JwtAuthGuard)
  @Post('/post-feed-history')
  @ApiQuery({
    name: 'pageId',
    type: String,
    description: 'The ID of the Facebook page',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully posted to Facebook feed',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  async postToFeed(@Query('pageId') pageId: string) {
    try {
      const result =
        await this.facebookPageService.getPostHistoryWithoutPagination(pageId);
      return result.data;
    } catch (error) {
      return { error: error.message };
    }
  }
  // @UseGuards(JwtAuthGuard)
  @Post('/get-post-atachments')
  @ApiQuery({
    name: 'pageId',
    type: String,
    description: 'The ID of the Facebook page',
    required: true,
  })
  @ApiQuery({
    name: 'postId',
    type: String,
    description: 'The ID of the Facebook Post',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully posted to Facebook feed',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
  })
  async getPostAtacments(
    @Query('postId') postId: string,
    @Query('pageId') pageId: string,
  ) {
    try {
      const result =
        await this.facebookPageService.getPostAttachmentsWithoutPagination(
          postId,
          pageId,
        );
      return result.data;
    } catch (error) {
      return { error: error.message };
    }
  }
}
