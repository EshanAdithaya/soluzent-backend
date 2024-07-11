import { ApiProperty } from '@nestjs/swagger';
import { PostStatus } from 'src/enums/post-status.enum'; // Adjust the path as necessary

export class UpdatePostDto {
  @ApiProperty({ description: 'Content of the post', required: false })
  content?: string;

  @ApiProperty({ description: 'Facebook Post ID', required: false })
  facebookPostId?: string;

  @ApiProperty({
    description: 'Array of image URLs',
    type: [String],
    required: false,
  })
  imageUrls?: string[];

  @ApiProperty({
    description: 'Array of video URLs',
    type: [String],
    required: false,
  })
  videoUrls?: string[];

  @ApiProperty({
    description: 'Scheduled date and time for the post',
    required: false,
  })
  scheduledAt?: Date;

  @ApiProperty({
    description: 'Status of the post',
    enum: PostStatus,
    required: false,
  })
  status?: PostStatus;
}
