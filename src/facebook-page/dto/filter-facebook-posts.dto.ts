import { IsOptional, IsUUID } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetPostsFilterDto {
  @ApiPropertyOptional({ description: 'ID of the root account' })
  @IsOptional()
  @IsUUID()
  rootAccountId?: string;

  //   @ApiPropertyOptional({ description: 'ID of the user' })
  //   @IsOptional()
  //   @IsUUID()
  //   userId?: string;

  @ApiPropertyOptional({ description: 'ID of the Facebook page' })
  @IsOptional()
  @IsUUID()
  pageId?: string;
}
