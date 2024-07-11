import { ApiProperty } from '@nestjs/swagger';
import { PostStatus } from 'src/enums/post-status.enum';

export class CreatePostDto {
  @ApiProperty({ description: 'Content of the post' })
  content: string;
  @ApiProperty({ description: 'Facebook Post id of the post' })
  contefacebookPostIdnt: string;

  @ApiProperty({ description: 'Array of image URLs', type: [String] })
  imageUrls: string[];

  @ApiProperty({ description: 'Array of video URLs', type: [String] })
  videoUrls: string[];

  @ApiProperty({
    description: 'Scheduled date and time for the post',
    required: false,
  })
  scheduledAt?: Date;

  @ApiProperty({
    description: 'Status of the post',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status?: PostStatus;

  //   @ApiProperty({ description: 'User ID associated with the post' })
  //   userId: string;

  @ApiProperty({ description: 'Root account ID associated with the post' })
  rootAccountId: string;

  @ApiProperty({ description: 'Facebook page ID associated with the post' })
  pageId: string;
}
