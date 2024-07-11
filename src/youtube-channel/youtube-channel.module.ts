import { Module } from '@nestjs/common';
import { YoutubeChannelService } from './youtube-channel.service';
import { YoutubeChannelController } from './youtube-channel.controller';

@Module({
  providers: [YoutubeChannelService],
  controllers: [YoutubeChannelController]
})
export class YoutubeChannelModule {}
