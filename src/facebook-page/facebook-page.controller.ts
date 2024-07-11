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
}
