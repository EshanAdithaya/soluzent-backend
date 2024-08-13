import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OAuthCallbackDto } from './dto/oauth-callback.dto';
import axios from 'axios';
import { RootAccountService } from 'src/root-account/root-account.service';
import { SocialMediaPlatform } from 'src/enums/social-media-platform.enum';
import { CreateRootAccountDto } from 'src/root-account/dto/CreateRootAccount.dto';

import { FacebookPageService } from 'src/facebook-page/facebook-page.service';
import { InjectRepository } from '@nestjs/typeorm';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entitys/user.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';

@Injectable()
export class CallbackService {
  constructor(
    private readonly rootAccountService: RootAccountService,
    private readonly facebookPageService: FacebookPageService,
    @InjectRepository(FacebookPage)
    private facebookPageEntity: Repository<FacebookPage>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(RootAccount)
    private rootAccount: Repository<RootAccount>,
  ) {}
  async handleOAuthCallback(
    provider: string,
    userId: string,
    pageLinked: boolean,
    oAuthCallbackDto: OAuthCallbackDto,
  ): Promise<any> {
    console.log('called');
    console.log('provider');
    console.log(oAuthCallbackDto);
    const { code } = oAuthCallbackDto;
    let tokenUrl = '';
    let clientId = '';
    let clientSecret = '';
    const redirectUri =
      'https://soluzent-marketing-devtesting.netlify.app/callback';
    // const redirectUri = 'http://localhost:3000/callback';

    switch (provider) {
      case 'facebook':
        clientId = '491077089981477';
        clientSecret = 'fb1d6b89108a72668e7cd8643110cc9e';
        tokenUrl = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;
        break;
      case 'instagram':
        clientId = '491077089981477';
        clientSecret = 'fb1d6b89108a72668e7cd8643110cc9e';
        tokenUrl = `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${clientId}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&code=${code}`;
        break;
      case 'tiktok':
        clientId = 'aw8mqqcpn6ayrkiy';
        clientSecret = 'OVI5Wplc9gEu4E9181OK2Vu1pXpUhwz9';
        tokenUrl = `https://open-api.tiktok.com/oauth/access_token`;
        break;
      case 'youtube':
        clientId = 'YOUR_YOUTUBE_CLIENT_ID';
        clientSecret = 'YOUR_YOUTUBE_CLIENT_SECRET';
        tokenUrl = `https://oauth2.googleapis.com/token`;
        break;
      default:
        throw new HttpException('Unsupported provider', HttpStatus.BAD_REQUEST);
    }

    try {
      const response = await axios.post(tokenUrl, {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      });
      // console.log(response.data);
      switch (provider) {
        case 'facebook':
          return this.createRootAccount(response.data.access_token, userId);

        case 'instagram':
          console.log();
        case 'tiktok':
          console.log();
          break;
        case 'youtube':
          console.log();
          break;
        default:
          throw new HttpException(
            'Unsupported provider',
            HttpStatus.BAD_REQUEST,
          );
      }
      //return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }
  public async createRootAccount(
    accessToken: string,
    userId: string,
  ): Promise<any> {
    const userUrl = `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`;

    try {
      const response = await axios.get(userUrl);

      const user = await this.userRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }

      const createDto = new CreateRootAccountDto();
      createDto.platform = SocialMediaPlatform.FACEBOOK;
      createDto.accountId = response.data.id;
      createDto.accountName = response.data.name;
      createDto.accessToken = accessToken;
      createDto.refreshToken = null;
      createDto.expiresIn = 4320000;
      createDto.userId = userId;
      createDto.email = response.data.email;

      const rootAccount = await this.rootAccountService.create(createDto);

      if (rootAccount) {
        return {
          status: true,
          message: 'Root account created successfully!',
          data: rootAccount,
        };
      } else {
        return {
          status: false,
          message: 'Root account creation failed',
        };
      }
    } catch (error) {
      console.error('Error fetching basic user data:', error);
      return {
        status: false,
        message: 'Error fetching basic user data',
        error,
      };
    }
  }
  public async refreshPages(
    rootAccountId: string,
    userId: string,
  ): Promise<any> {
    try {
      const rootAccount = await this.rootAccountService.findOne(rootAccountId);
      if (!rootAccount) {
        throw new NotFoundException(
          `Root Account with ID ${rootAccountId} not found`,
        );
      }

      const currentUser = await this.userRepository.findOne({
        where: { id: userId },
      });

      const pagesUrl = `https://graph.facebook.com/me/accounts?fields=id,name,access_token&access_token=${rootAccount.accessToken}`;
      const response = await axios.get(pagesUrl);

      const pagesData = response.data.data;
      // let returnData = '';
      for (const pageData of pagesData) {
        let facebookPage = await this.facebookPageEntity.findOne({
          where: { pageId: pageData.id },
        });
        console.log(pageData);
        if (facebookPage) {
          facebookPage.accessToken = pageData.access_token;
          await this.facebookPageEntity.save(facebookPage);
        } else {
          facebookPage = new FacebookPage();
          facebookPage.accessToken = pageData.access_token;
          facebookPage.pageId = pageData.id;
          facebookPage.pageName = pageData.name;
          facebookPage.refreshToken = 'refreshToken';
          facebookPage.expiresIn = 4320000;
          facebookPage.isActive = true;
          facebookPage.rootAccount = rootAccount;
          facebookPage.user = currentUser;

          await this.facebookPageEntity.save(facebookPage);
        }
      }

      return {
        status: true,
        message: 'Pages updated successfully!',
      };
    } catch (error) {
      console.error('Error fetching and updating pages:', error);
      return {
        status: false,
        message: 'Error fetching and updating pages',
        error,
      };
    }
  }
  // 69129896-6f19-43a2-b332-ccf38544fea1
  // private getBasicUserData = async (accessToken, userId, pageLinked) => {
  //   const userUrl = `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`;

  //   try {
  //     const response = await axios.get(userUrl);
  //     // console.log(response.data);
  //     try {
  //       const user = await this.userRepository.findOne({
  //         where: { id: userId },
  //       });
  //       if (!user) {
  //         throw new NotFoundException(`User with id ${userId} not found`);
  //       }

  //       const createDto = new CreateRootAccountDto();
  //       createDto.platform = SocialMediaPlatform.FACEBOOK;
  //       createDto.accountId = response.data.id;
  //       createDto.accountName = response.data.name;
  //       createDto.accessToken = accessToken;
  //       createDto.refreshToken = null;
  //       createDto.expiresIn = 4320000;
  //       createDto.userId = userId;
  //       createDto.email = response.data.email;
  //       // Assuming createRootAccountDto is populated with necessary data
  //       const RootAccount = await this.rootAccountService.create(createDto);
  //       console.log(RootAccount);
  //       if (RootAccount) {
  //         const pagesUrl = `https://graph.facebook.com/me/accounts?fields=id,name,access_token&access_token=${accessToken}`;
  //         try {
  //           // const rootAccount = await this.rootAccountService.findOne(
  //           //   RootAccount.id,
  //           // );
  //           const user = await this.userRepository.findOne({
  //             where: { id: userId },
  //           });
  //           if (!user) {
  //             throw new NotFoundException(
  //               `User Account with ID ${user.id} not found`,
  //             );
  //           }
  //           if (!RootAccount) {
  //             throw new NotFoundException(
  //               `Root Account with ID ${user.id} not found`,
  //             );
  //           }
  //           const response = await axios.get(pagesUrl);
  //           console.log(response);
  //           const facebookPage = new FacebookPage();
  //           facebookPage.accessToken = response.data.data[0].access_token;
  //           facebookPage.pageId = response.data.data[0].id;
  //           facebookPage.pageName = response.data.data[0].name;
  //           facebookPage.refreshToken = 'refreshToken';
  //           facebookPage.expiresIn = 4320000;
  //           facebookPage.isActive = true;
  //           facebookPage.rootAccount = RootAccount;
  //           facebookPage.user = user;

  //           const facebookPageData = await this.facebookPageEntity.findOne({
  //             where: { pageId: facebookPage.pageId },
  //           });
  //           if (facebookPageData) {
  //             facebookPageData.accessToken = facebookPage.accessToken;
  //             return {
  //               data: await this.facebookPageEntity.save(facebookPageData),
  //               // userRootAccount: RootAccount,
  //               status: true,
  //             };
  //           } else {
  //             return {
  //               // data: await await this.facebookPageEntity.save(facebookPage),
  //               // userRootAccount: RootAccount,
  //               status: true,
  //             };
  //             // return await this.facebookPageEntity.save(facebookPage);
  //           }
  //         } catch (error) {
  //           // console.error('Error fetching pages list:', error);
  //           // throw new Error('Error fetching pages list');
  //           return {
  //             // data: await await this.facebookPageEntity.save(facebookPage),
  //             // userRootAccount: RootAccount,
  //             status: false,
  //             error: error,
  //           };
  //         }
  //       }

  //       return {
  //         status: true,
  //         message: 'Root account created Successfullt',
  //         // data: RootAccount,
  //       };
  //       console.log('Root account created successfully!');
  //     } catch (error) {
  //       return {
  //         status: false,
  //         message: 'Root account creation failed',
  //         error: error,
  //       };
  //     }
  //   } catch (error) {
  //     console.error('Error fetching basic user data:', error);
  //     throw new Error('Error fetching basic user data');
  //   }
  // };
}
