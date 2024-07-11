/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateFacebookPageDto } from './dto/CreateFacebookPage.dto';
import { FacebookPage } from './entitys/facebook-page.entity';
import { UpdateFacebookPageDto } from './dto/UpdateFacebookPage.dto';
import { UserEntity } from 'src/user/entitys/user.entity';
import { FacebookPost } from './entitys/facebook-posts.entity';
import { CreatePostDto } from './dto/create-facebook-post.dto';
import { UpdatePostDto } from './dto/update-facebook-post.dto';
import { GetPostsFilterDto } from './dto/filter-facebook-posts.dto';

@Injectable()
export class FacebookPageService {
  constructor(
    @InjectRepository(FacebookPage)
    private readonly facebookPageRepository: Repository<FacebookPage>,
    @InjectRepository(RootAccount)
    private readonly rootAccountRepository: Repository<RootAccount>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FacebookPost)
    private readonly postRepository: Repository<FacebookPost>,
  ) {}

  async create(
    createFacebookPageDto: CreateFacebookPageDto,
  ): Promise<FacebookPage> {
    const { rootAccountId, ...rest } = createFacebookPageDto;

    // Find the root account
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { id: rootAccountId },
    });
    if (!rootAccount) {
      throw new NotFoundException(
        `Root Account with ID ${rootAccountId} not found`,
      );
    }

    // Create and save the new Facebook page
    const newFacebookPage = this.facebookPageRepository.create(
      createFacebookPageDto,
    );
    return await this.facebookPageRepository.save(newFacebookPage);
  }

  async update(
    id: string,
    updateFacebookPageDto: UpdateFacebookPageDto,
  ): Promise<FacebookPage> {
    const { rootAccountId, ...rest } = updateFacebookPageDto;

    // Find the Facebook page to update
    const facebookPage = await this.facebookPageRepository.findOne({
      where: { id: id },
    });
    if (!facebookPage) {
      throw new NotFoundException(`Facebook Page with ID ${id} not found`);
    }

    // Find the root account
    const rootAccount = await this.rootAccountRepository.findOne({
      where: { accountId: rootAccountId },
    });
    if (!rootAccount) {
      throw new NotFoundException(
        `Root Account with ID ${rootAccountId} not found`,
      );
    }

    // Update and save the Facebook page
    facebookPage.rootAccount = rootAccount;
    Object.assign(facebookPage, rest); // Apply updates
    return await this.facebookPageRepository.save(facebookPage);
  }
  async findAll(userId: string): Promise<FacebookPage[]> {
    console.log(userId);
    return await this.facebookPageRepository.find({
      where: {
        user: { id: userId }, // Filter by user ID
      },
    });
  }

  async findOne(id: string): Promise<FacebookPage> {
    const facebookPage = await this.facebookPageRepository.findOne({
      where: { id: id },
    });
    if (!facebookPage) {
      throw new NotFoundException(`Facebook Page with ID ${id} not found`);
    }
    return facebookPage;
  }
  async delete(id: string): Promise<void> {
    const facebookPage = await this.findOne(id);
    await this.facebookPageRepository.remove(facebookPage);
  }
  async createFacebookPost(createPostDto: CreatePostDto, userId: string) {
    try {
      const { rootAccountId, pageId, ...postDetails } = createPostDto;

      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        return {
          status: false,
          message: 'User not found ',
        };
      }

      const rootAccount = await this.rootAccountRepository.findOne({
        where: { id: rootAccountId },
      });
      if (!rootAccount) {
        return {
          status: false,
          message: 'Root account not found ',
        };
      }
      const page = await this.facebookPageRepository.findOne({
        where: { id: pageId },
      });
      if (!page) {
        return {
          status: false,
          message: 'Page not found not found ',
        };
      }

      const post = this.postRepository.create({
        ...postDetails,
        user,
        rootAccount,
        page,
      });

      this.postRepository.save(post);
    } catch (error) {
      return {
        status: false,
        message: 'An error occured when creating the post',
        error: error,
      };
    }
    return { status: true, message: 'Post has been created successfulluy' };
  }
  async updateFacebookPost(postId: string, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postRepository.findOne({ where: { id: postId } });

      if (!post) {
        return {
          status: false,
          message: 'Post not found',
        };
      }

      Object.assign(post, updatePostDto);
      this.postRepository.save(post);
    } catch (error) {
      return {
        status: false,
        message: 'Post update failed',
        error: error,
      };
    }
    return {
      status: true,
      message: 'Post successcully updated',
    };
  }
  async findFacebookPosts(filterDto: GetPostsFilterDto, userId: string) {
    const { rootAccountId, pageId } = filterDto;

    const findOptions: FindManyOptions<FacebookPost> = {
      where: {},
      // relations: ['user', 'rootAccount', 'page'],
    };

    if (rootAccountId) {
      findOptions.where['rootAccount'] = { id: rootAccountId };
    }
    if (userId) {
      findOptions.where['user'] = { id: userId };
    }

    if (pageId) {
      findOptions.where['page'] = { id: pageId };
    }

    return { data: await this.postRepository.find(findOptions) };
  }
  async deletePost(postId: string) {
    const post = await this.postRepository.findOne({ where: { id: postId } });

    if (!post) {
      return {
        status: false,
        message: 'Post not found',
      };
    }

    await this.postRepository.softDelete(postId);
    return {
      status: true,
      message: 'Post successcully deleted',
    };
  }
}
